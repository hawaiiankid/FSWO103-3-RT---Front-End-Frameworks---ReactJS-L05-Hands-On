import React from 'react';
import Topic from './Topic';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/2021 Widebody Toyota Supra`}>Favorite Car</Link>
      </li>
      <li>
        <Link to={`${match.url}/Chick Fil-A`}>Favorite Food</Link>
      </li>
      <li>
        <Link to={`${match.url}/Star Wars Revenge of The Sith`}>Favorite Movie</Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic} />
    <Route
      exact
      path={match.url}
      render={() => <h3>Please select a topic.</h3>}
    />
  </div>
);

export default Topics;