import React from 'react';
import styles from './profil.module.css';
import { faMailBulk, faSearchLocation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export type ProfilProps = {
  imgUrl: string;
  name: string;
  job: string;
  description: string;
  mail: string;
  linkedin: string;
};

export const Profil: React.FunctionComponent<ProfilProps> = (props: ProfilProps) => {
  return (
    <div className={styles.profile}>
      <div className={styles.profilPicture}>
        <img src={props.imgUrl} width="120" className={styles.pictureRadius}></img>
      </div>
      <h3 className={styles.profilName}>{props.name}</h3>
      <h4 className={styles.profilJob}>{props.job}</h4>
      <p className={styles.profilDescription}>{props.description}</p>
      <div className={styles.profileSocial}>
        <div className={styles.profilLinkedIn}>
          <a href={props.linkedin}>
            <FontAwesomeIcon icon={faSearchLocation} />
          </a>
        </div>
        <div className={styles.profilMail}>
          <a href={`mailto:${props.mail}`}>
            <FontAwesomeIcon icon={faMailBulk} />
          </a>
        </div>
      </div>
    </div>
  );
};
