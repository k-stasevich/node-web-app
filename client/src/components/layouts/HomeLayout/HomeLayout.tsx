import './HomeLayout.scss';

import React, { useEffect } from 'react';

interface IHomeLayoutComponentProps {
  userId: string;

  getUserData(userId: string): void;
}

export const HomeLayoutComponent: React.FC<IHomeLayoutComponentProps> = props => {
  const { userId, getUserData } = props;

  useEffect(() => {
    getUserData(userId);
  }, [getUserData, userId]);

  return <div className="home-layout page">HOME</div>;
};
