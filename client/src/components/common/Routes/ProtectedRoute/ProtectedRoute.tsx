import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';

interface IProtectedRouteProps extends RouteProps {
  isAuthorized: boolean;
  component: React.ComponentType<any>;
}

export const ProtectedRoute: React.FC<IProtectedRouteProps> = props => {
  const { isAuthorized, component: Component, ...otherProps } = props;

  return (
    <Route
      {...otherProps}
      render={props =>
        isAuthorized ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};
