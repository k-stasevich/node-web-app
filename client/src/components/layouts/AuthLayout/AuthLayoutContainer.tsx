import React, { useCallback } from 'react';
import { Redirect } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

import { AuthLayoutComponent } from './AuthLayout';
import { isAuthorizedSelector } from '../../../redux/auth/authSelectors';
import { authActions } from '../../../redux/auth/authActions';

export const AuthLayout: React.FC = props => {
  const isAuthorized = useSelector(isAuthorizedSelector);

  const dispatch = useDispatch();

  const login = useCallback(
    (login: string, password: string) => dispatch(authActions.login(login, password)),
    [dispatch],
  );

  if (isAuthorized) {
    return <Redirect to="/" />;
  }

  return <AuthLayoutComponent login={login} />;
};
