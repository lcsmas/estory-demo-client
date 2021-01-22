import React, { useEffect, useState } from 'react';
import styles from './TimelineCard.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import axios, { AxiosRequestConfig } from 'axios';
import { useHistory } from 'react-router-dom';
import { Timeline_Interface } from '../../interfaces/Timeline.interface';

export type TimelineCardProps = {
  id: number;
  title?: string;
  period?: string;
  author?: string;
  backgroundImageUrl?: string;
  nbLike?: number;
};

const cardImgStyle = (urlImg: string | undefined) => {
  const styles: React.CSSProperties = {
    backgroundImage: urlImg
      ? `url(${urlImg.replace(
          'https://res.cloudinary.com/dk2ghb1pg/image/upload/',
          'https://res.cloudinary.com/dk2ghb1pg/image/upload/w_440,c_scale/',
        )})`
      : `none`,
    position: 'relative',
    width: '100%',
    height: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
  };
  return styles;
};

export const TimelineCard: React.FunctionComponent<TimelineCardProps> = (props: TimelineCardProps) => {
  const history = useHistory();
  const [period, setPeriod] = useState(props.period ? props.period : null);
  const [author, setAuthor] = useState(props.author ? props.author : null);
  const [nbLike, setNbLike] = useState(props.nbLike ? props.nbLike : 0);
  const [title, setTitle] = useState(props.title ? props.title : null);
  const [backgroundImageUrl, setBackgroundImageUrl] = useState(
    props.backgroundImageUrl ? props.backgroundImageUrl : undefined,
  );
  const [loading, setLoading] = useState(true);

  async function getCardInfos(): Promise<Timeline_Interface> {
    return new Promise((resolve, reject) => {
      try {
        const url = `${process.env.REACT_APP_SERV_HOST}/timelines/${props.id}`;
        const config: AxiosRequestConfig = {
          method: 'get',
          headers: { 'Content-Type': 'application/json' },
        };
        axios.get(url, config).then((result) => {
          resolve(result.data.data);
        });
      } catch (err) {
        reject(err);
      }
    });
  }

  async function getPeriod(): Promise<string> {
    return new Promise((resolve, reject) => {
      try {
        const url = `${process.env.REACT_APP_SERV_HOST}/timelines/${props.id}/period`;
        const config: AxiosRequestConfig = {
          method: 'get',
          headers: { 'Content-Type': 'application/json' },
        };
        axios.get(url, config).then((result) => {
          resolve(result.data.data);
        });
      } catch (err) {
        reject(err);
      }
    });
  }

  useEffect(() => {
    getPeriod().then((period) => {
      setPeriod(period);
    });
    if (!props.author || !props.title || !props.nbLike || !props.backgroundImageUrl) {
      getCardInfos().then((result) => {
        console.log(result.img_background);
        setAuthor(
          result.UserModels[0] ? `${result.UserModels[0].firstname} ${result.UserModels[0].lastname}` : `Unknown User`,
        );
        setBackgroundImageUrl(result.img_background);
        setTitle(result.title);
        setNbLike(result.nbLike ? result.nbLike : 0);
      });
    }
    setLoading(false);
  }, [loading]);

  const handleClick = () => {
    const url = `/timeline/${props.id}`;
    history.push(url);
  };

  return (
    <div className={styles.eventCard} onClick={handleClick}>
      <div className={styles.cardImg} style={cardImgStyle(props.backgroundImageUrl)}></div>
      <div className={`${styles.cardContent} hvr-pop`}>
        <div className={styles.cardText}>
          <h3 className={styles.eventTitle}>{title}</h3>
          <h3 className={styles.eventDate}> {period}</h3>
          <h3 className={styles.eventAuthor}>{author}</h3>
          <h3 className={styles.eventLike}>
            <FontAwesomeIcon icon={faThumbsUp} />
            {nbLike}
          </h3>
          {/* <a className={styles.cardLink} href={props.title}></a> */}
        </div>
      </div>
    </div>
  );
};

//const mapStateToProps = (state) => ({});

//const mapDispatchToProps = {};

//export default connect(mapStateToProps, mapDispatchToProps)(TimelineCard);
