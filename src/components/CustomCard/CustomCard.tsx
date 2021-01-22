import React from 'react';
import styles from './customCard.module.css';

export type CustomCardProps = {
  imgUrl: string;
  title: string;
  description: string;
};

export const CustomCard: React.FunctionComponent<CustomCardProps> = (props: CustomCardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardPicture}>
        <img src={props.imgUrl} width="120" className={styles.pictureRadius}></img>
      </div>
      <h3 className={styles.cardTitle}>{props.title}</h3>
      <p className={styles.cardDescription}>{props.description}</p>
    </div>
  );
};
