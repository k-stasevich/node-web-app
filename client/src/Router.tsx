import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { HomeLayout } from './components/layouts/HomeLayout';

export function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomeLayout} />
      </Switch>
    </Router>
  );
}
