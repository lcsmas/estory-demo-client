import React, { useEffect, useState } from 'react';
import style from './RelatedSource.module.css';
import { AmazonItem_Interface } from '../../interfaces/AmazonItemsInterface.interface';
import { connect } from 'react-redux';
import { AmazonItem } from '../../components/AmazonItem/AmazonItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import axios, { AxiosRequestConfig } from 'axios';
import { Spinner } from '../../components/LoadingSpinner/Spinner';

export const RelatedSource: React.FunctionComponent = (props) => {
  const [searchTerms, setSearchTerms] = useState('');
  const [isFetching, setIsFetching] = useState(false);
  const [items, setItems] = useState<AmazonItem_Interface[]>([]);

  const onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>): void => {
    // 'keypress' event misbehaves on mobile so we track 'Enter' key via 'keydown' event
    if (event.key === 'Enter' || event.key == 'NumpadEnter') {
      event.preventDefault();
      event.stopPropagation();
      triggerSearch();
    }
  };

  const fetchItems = async () => {
    try {
      const url = `${process.env.REACT_APP_SERV_HOST}/amazonscrap?title=${searchTerms}&category=book`;
      const config: AxiosRequestConfig = {
        method: 'get',
        headers: { 'Content-Type': 'application/json' },
      };
      const res = await axios.get(url, config);
      setItems(res.data.data);
    } catch (e) {
      console.log(e);
    }
  };
  const triggerSearch = async () => {
    if (searchTerms.length > 0) {
      setIsFetching(true);
      await fetchItems();
      setIsFetching(false);
    }
  };
  return (
    <>
      <div className={style.container}>
        <div className={style.titleContainer}>Find item</div>
        <div className={style.searchBarContainer}>
          <input
            type="text"
            className={style.searchText}
            onChange={(e) => {
              setSearchTerms(e.target.value);
            }}
            onKeyDown={onKeyDown}
          />
          <button className={style.searchButton} onClick={triggerSearch}>
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
        <div className={style.itemListContainer}>
          {!isFetching &&
            items?.map((item, i) => (
              <AmazonItem
                key={i}
                title={item.title}
                url={item.url}
                imgURL={item.imgURL}
                firstRowHTML={item.firstRowHTML}
              />
            ))}
          {isFetching && <Spinner />}
        </div>
      </div>
    </>
  );
};

// const mapStateToProps = (state) => ({});

// const mapDispatchToProps = {};

// export default connect(mapStateToProps, mapDispatchToProps)(RelatedSource);
