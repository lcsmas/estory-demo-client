import React from 'react';
import style from './AmazonItem.module.css';

import { connect } from 'react-redux';
import { AmazonItem_Interface } from '../../interfaces/AmazonItemsInterface.interface';
export type AmazonItemProps = {
  title: string;
  imgUrl: string;
  url: string;
};
export const AmazonItem: React.FunctionComponent<AmazonItem_Interface> = (props: AmazonItem_Interface) => {
  return (
    <div className={style.container}>
      <img src={props.imgURL} className={style.image} />
      <div className={style.textContainer}>
        <p className={style.title}>{props.title}</p>
        <div className={style.firstRow} dangerouslySetInnerHTML={{ __html: props.firstRowHTML }}></div>
      </div>
    </div>
  );
};

// const mapStateToProps = (state) => ({});

// const mapDispatchToProps = {};

// export default connect(mapStateToProps, mapDispatchToProps)(RelatedSource);
