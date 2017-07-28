import React from 'react';  
import { Route, IndexRoute } from 'react-router';  
import App from './App';
import User from './components/User';  


export default (  
  <Route path="/" component={App}>
    <IndexRoute component={User} />
    <Route path="/users" component={User} >
      <Route path="/users/:id" component={User} />
    </Route>
  </Route>
);