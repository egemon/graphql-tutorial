import React, { Component } from 'react';
import {
  BrowserRouter,
  Link,
  Route,
  Switch,
} from 'react-router-dom';

import './App.css';
import ChannelsListWithData from './components/ChannelsListWithData';
import NotFound from './components/NotFound';
import ChannelDetails from './components/ChannelDetails';

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Link to="/" className="navbar">React + GraphQL Tutorial</Link>
          <Switch>
            <Route exact path="/" component={ChannelsListWithData}/>
            <Route path="/channel/:channelId" component={ChannelDetails}/>
            <Route component={NotFound}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default Router;
