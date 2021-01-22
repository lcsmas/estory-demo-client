import React from 'react';
import renderer from 'react-test-renderer';
import { TimelineCard } from '../TimelineCard';
import ReactDOM from 'react-dom';
import { isMainThread } from 'worker_threads';

test('Timeline card display properly', () => {
  const timelineProps = {
    id: 1,
    title: 'Title',
    author: 'Author',
    backgroundImageUrl:
      'https://res.cloudinary.com/dk2ghb1pg/image/upload/w_440,h_300,c_scale/v1605888278/udgaet4g3e4gxdvzjms4.jpg',
    nbLike: 10,
    period: '1921 - 2008',
  };
  const component = renderer.create(<TimelineCard {...timelineProps} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
