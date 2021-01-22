import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useParams } from 'react-router-dom';
import { NavBar } from './features/navigation-bar/NavBar';
import './App.css';
import TimelineList from './features/timeline-list/TimelineList';
import { About } from './features/about/about';
// import { TimelineDisplayLayout } from './features/timeline-display/TimelineDisplayLayout';
import { RelatedSource } from './features/related-source/RelatedSource';

function App(): JSX.Element {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Route exact path="/">
          <div className="Intro-Video">
            <video autoPlay muted loop id="myVid">
              <source src={`video/Intro_Video/IntroVideo.mp4`} type="video/mp4" />
              Your browser does not support HTML5 video.
            </video>
          </div>
          <div className="Intro-Text">
            <h1>Welcome to eStory</h1>
            <h3>Visualize the key events of stories on a timeline</h3>
          </div>
        </Route>
        <div className="App-content">
          <Route exact path="/">
            <TimelineList />
          </Route>
          <Route path="/timeline/:id">{/* <TimelineDisplayLayout /> */}</Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/demo/related-source">
            <RelatedSource />
          </Route>
        </div>
        <div className="App-footer">
          <p>Footer</p>
        </div>
      </Router>
    </div>
  );
}

export default App;
