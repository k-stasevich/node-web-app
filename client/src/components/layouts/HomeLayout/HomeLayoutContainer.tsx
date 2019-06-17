import './HomeLayout.scss';

import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { userActions } from '../../../redux/user/userActions';
import { getUserIdSelector } from '../../../redux/auth/authSelectors';
import { HomeLayoutComponent } from './HomeLayout';

export const HomeLayout: React.FC = props => {
  const userId = useSelector(getUserIdSelector) as string;

  const dispatch = useDispatch();

  const getUserData = useCallback((userId: string) => dispatch(userActions.getUserData(userId)), [
    dispatch,
  ]);

  return <HomeLayoutComponent getUserData={getUserData} userId={userId} />;
};
