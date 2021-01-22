/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { Component, useState, useEffect, SetStateAction } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { AnyAction, bindActionCreators, Dispatch } from 'redux';
import InfiniteScroll from 'react-infinite-scroll-component';

import { createTimelineActionCreator, removeTimelineActionCreator, selectTimelines } from './TimelineListSlice';

import styles from './TimelineList.module.css';
import { Timeline_Interface } from '../../interfaces/Timeline.interface';
import axios, { AxiosRequestConfig } from 'axios';
import { Timeline } from '../../models/Timeline.model';
import { State } from '../../app/store';
import { Container, Row, Col } from 'react-bootstrap';
import { TimelineCard } from '../../components/TimelineCard/TimelineCard';

const TimelineList: React.FunctionComponent = function () {
  const dispatch = useDispatch();
  const timelines: null | Timeline_Interface[] = useSelector(selectTimelines);
  const [max, setMax] = useState(9999999);
  const [last, setLast] = useState(0);
  const [visible, setVisible] = useState(0);
  const [loading, setLoading] = useState(true);
  const [counter, setCounter] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  async function fetchTimelines(index: number, num: number): Promise<Timeline_Interface[]> {
    return new Promise((resolve, reject) => {
      try {
        const url = `${process.env.REACT_APP_SERV_HOST}/timelines`;
        const config: AxiosRequestConfig = {
          method: 'get',
          headers: { 'Content-Type': 'application/json' },
          params: {
            index: index,
            number: num,
            published: true,
          },
        };
        axios.get(url, config).then((timelines) => {
          const timelineList: Timeline_Interface[] = new Array<Timeline>();
          timelines.data.data.forEach((timeline: Timeline_Interface) => {
            timelineList.push(timeline);
          });
          resolve(timelineList);
        });
      } catch (err) {
        reject(err);
      }
    });
  }
  async function getMax(): Promise<number> {
    return new Promise((resolve, reject) => {
      try {
        const url = `${process.env.REACT_APP_SERV_HOST}/timelines/max`;
        const config: AxiosRequestConfig = {
          method: 'get',
          headers: { 'Content-Type': 'application/json' },
        };
        axios.get(url, config).then((result) => {
          console.log(`max : ${result.data.data}`);
          resolve(result.data.data);
        });
      } catch (err) {
        reject(err);
      }
    });
  }

  useEffect(() => {
    if (max === 9999999) {
      // Get du max
      getMax().then((max) => {
        setMax(max);
      });
    }
    if (loading) {
      let nbrToFetch = 16;
      if (last + 16 > max) {
        nbrToFetch = max - last;
        setHasMore(false);
      }
      // Get des timelines
      console.log(`Fetching offset : ${last}, nbr to fetch : ${nbrToFetch}`);
      fetchTimelines(last, nbrToFetch).then((timelineList) => {
        timelineList.forEach((timeline) => {
          dispatch(createTimelineActionCreator(timeline));
        });
      });
      // Set du last
      setLast(last + 20);
      setLoading(false);
    }
  }, [loading]);

  return (
    <InfiniteScroll
      dataLength={timelines.length} //This is important field to render the next data
      next={() => setLoading(true)}
      hasMore={hasMore}
      loader={<h4>Loading...</h4>}
      endMessage={
        <p style={{ textAlign: 'center' }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
    >
      <div className={styles.AppTimelineList}>
        <Container fluid={true}>
          <Row>
            {timelines?.map((timeline, key) => (
              <Col xs={12} sm={6} md={4} lg={3} key={Number(timeline.id)}>
                <TimelineCard
                  id={Number(timeline.id)}
                  title={timeline.title}
                  backgroundImageUrl={timeline.img_background}
                  author={
                    timeline.UserModels[0]
                      ? `${timeline.UserModels[0].firstname} ${timeline.UserModels[0].lastname}`
                      : `Unknown User`
                  }
                  nbLike={timeline.nbLike ? timeline.nbLike : 0}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </InfiniteScroll>
  );
};

export default TimelineList;
