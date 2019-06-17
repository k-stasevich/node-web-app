import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { ToastsContainer, ToastsStore, ToastsContainerPosition } from 'react-toasts';
import { useSelector } from 'react-redux';

import { AuthLayout } from './components/layouts/AuthLayout';
import { HomeLayout } from './components/layouts/HomeLayout';
import { ProtectedRoute } from './components/common/Routes/ProtectedRoute';
import { isAuthorizedSelector } from './redux/auth/authSelectors';

interface IAppRouterProps {}

const AppRouterComponent: React.FC<IAppRouterProps> = props => {
  const isAuthorized = useSelector(isAuthorizedSelector);

  return (
    <Router>
      <Switch>
        <ProtectedRoute exact isAuthorized={isAuthorized} path="/" component={HomeLayout} />
        <Route exact path="/login" component={AuthLayout} />

        <Redirect to="/login" />
      </Switch>

      <ToastsContainer store={ToastsStore} position={ToastsContainerPosition.TOP_RIGHT} />
    </Router>
  );
};

export const AppRouter = AppRouterComponent;
