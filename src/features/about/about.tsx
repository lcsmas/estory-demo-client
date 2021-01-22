import React from 'react';
import styles from './about.module.css';

import tree from '../../assets/img/tree.svg';
import rating from '../../assets/img/rating.svg';
import network from '../../assets/img/network.svg';
import bgEstory from '../../assets/img/about-bg.jpeg';
import { CustomCard } from '../../components/CustomCard/CustomCard';
import { Profil } from '../../components/Profil/profil';

export function About() {
  return (
    <>
      <div className={styles.aboutContainer}>
        <div className={styles.heading}>
          <h1 className={`${styles.headingText}`}>
            We foster a community of enthusiasts narrating and discovering interesting stories!
          </h1>
        </div>
        <div className={styles.ourTeam}>
          <h1 className={styles.ourTeamText}>Our Team</h1>
          <div className={styles.people}>
            <Profil
              imgUrl="https://res.cloudinary.com/dk2ghb1pg/image/upload/w_120,h_120,c_scale/v1525975885/lpcjeax8jjfwoeajwoh0.jpg"
              name="Jean-Benoit MALZAC"
              job="Product Manager"
              description="Is the founder of eStory. Passionate about storytelling, design and user experience."
              mail="jeanbenoitmalzac@estory.io"
              linkedin="https://www.linkedin.com/in/jeanbenoitmalzac/"
            />
          </div>
          <div className={styles.people}>
            <Profil
              imgUrl="https://res.cloudinary.com/dk2ghb1pg/image/upload/w_120,h_120,c_scale/v1530433444/0_w1sk5g.jpg"
              name="Jonathan PINET"
              job="Growth Hacking Strategy"
              description="Passionate about the Edtech industry. Loves chess and new challenges. "
              mail="jonathanpinet@estory.io"
              linkedin="https://www.linkedin.com/in/jonathanpinet/"
            />
          </div>
          <div className={styles.people}>
            <Profil
              imgUrl="https://res.cloudinary.com/dk2ghb1pg/image/upload/w_120,h_120,c_scale/v1525975887/gqji1floei6hrourjokf.jpg"
              name="Jean Bruté de Rémur"
              job="Lead Developer"
              description="Is the lead developer of the project. Loves working on projects that makes a difference."
              mail="jeanbrutederemur@estory.io"
              linkedin="https://www.linkedin.com/in/jean-brut%C3%A9-de-r%C3%A9mur/"
            />
          </div>
        </div>
        <div className={styles.what}>
          <h1 className={styles.whatTitle}>What is eStory?</h1>
          <div className={styles.whatDesc}>
            <p>
              eStory is a wide range of free, simple and dynamic timelines, submitted by our eStorians! You can access
              almost any topic, such as Art, Sciences, History, Lifestyle, Celebrities and Sports. You can also access a
              selection of related media content for each event in the eStory timelines. Anybody who is willing to
              contribute can become an eStorian and share their stories with the world!{' '}
            </p>
          </div>
        </div>
        <div className={styles.cardGrid}>
          <CustomCard
            imgUrl={tree}
            title="Unlimitted and diverse"
            description="For any particular topic, you can find many eStories shared by the eStorian community. For each of them, you can also find related eStories and relevant media content, such as Articles, Books and Films."
          />
          <CustomCard
            imgUrl={network}
            title="Clear understanding on related events"
            description="These innovative and dynamic eStory timelines help you to easily process information through timelines and gives you a clear view of each event that makes up the full eStory. "
          />
          <CustomCard
            imgUrl={rating}
            title="Rate the quality of each eStory"
            description="You can evaluate and rank the quality and accuracy of contributions made by our eStorian community by upvoting or downvoting their submission. The most accurate, relevant or trending eStories will be displayed first. "
          />
        </div>
      </div>
      <div className={styles.once} style={{ backgroundImage: `url(${bgEstory})` }}>
        <div className={styles.onceText}>
          <div className={styles.onceTextTitle}>
            <h1>Once upon a time</h1>
          </div>
          <div>
            <h2 className={styles.onceTextDesc}>
              eStory is not only design-friendly timelines; but also a new way to access, visualise, understand and
              share information.
            </h2>
            <h2 className={styles.onceTextDesc}>
              If you read this text, it means you belong to the lucky 40% of people who has access to the internet
              today, against only 1% in 1995. It feels like accessing information is part of our duty, because we have a
              desire to find out about the world in which we live. We are exposed to data and information overload
              through multiple channels, each of these with conflicting opinions or differing views.{' '}
            </h2>
            <h2 className={styles.onceTextDesc}>
              eStory will make all of these versions available to you in one place, helping you to get a better
              understanding.
            </h2>
          </div>
        </div>
        <div className={styles.oncecharts}>
          <div>
            <p className={styles.onceChartQuote}>
              “We are just an advanced breed of monkeys on a minor planet of a very average star. But we can understand
              the Universe. That makes us something very special.”
            </p>
            <h5 className={styles.onceChartQuoteAuthor}>- Stephen Hawking </h5>
            <div className="progress">
              <div
                className={`progress-bar progress-bar-primary six-sec-ease-in-out ${styles.progressBar}`}
                role="progressbar"
                aria-valuetransitiongoal="88"
                style={{ width: '95%' }}
              >
                1988
              </div>
            </div>
          </div>
          <div>
            <p className={styles.onceChartQuote}>
              “We are not makers of history. We are made by history.” - Martin Luther King, Jr.
            </p>
            <h5 className={styles.onceChartQuoteAuthor}>- Martin Luther King, Jr.</h5>
            <div className="progress">
              <div
                className={`progress-bar progress-bar-primary six-sec-ease-in-out ${styles.progressBar}`}
                role="progressbar"
                aria-valuetransitiongoal="88"
                style={{ width: '88%' }}
              >
                1963
              </div>
            </div>
          </div>
          <div className={styles.oncecharts}>
            <p className={styles.onceChartQuote}>
              “History is the version of past events that people have decided to agree upon.“
            </p>
            <h5 className={styles.onceChartQuoteAuthor}>- Napoleon Bonaparte</h5>
            <div className="progress">
              <div
                className={`progress-bar progress-bar-primary six-sec-ease-in-out ${styles.progressBar}`}
                role="progressbar"
                aria-valuetransitiongoal="88"
                style={{ width: '34%' }}
              >
                1798
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
