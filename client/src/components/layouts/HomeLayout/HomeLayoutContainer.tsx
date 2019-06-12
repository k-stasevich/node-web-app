import { connect } from 'react-redux';
import { compose } from 'redux';

import { HomeLayoutComponent } from './HomeLayout';
import { authActions } from '../../../redux/auth/authActions';

const mapStateToProps = () => {
  return {
    isAuthorized: true,
  };
};

const mapDispatchToProps = {
  login: authActions.login,
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export const HomeLayout = compose(withConnect)(HomeLayoutComponent);
