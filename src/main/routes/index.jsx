import React, { lazy } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch, useLocation, withRouter } from 'react-router-dom';
import { Error404 } from '../../modules/Errors';
import PrivateRoute from './PrivateRoute';

const Home = lazy(() => import('modules/Home'));
// const Dashboard = lazy(() => import('modules/Dashboard'));
const Login = lazy(() => import('modules/Login'));

const Routes = ({ isLoggedIn }) => {
  const location = useLocation();
  const { from } = location.state || { from: { pathname: '/dashboard' } };

  return (
    <Switch>
      <Route
        exact
        path="/"
        render={() => {
          if (isLoggedIn && from) {
            return <Redirect to={from} />;
          } else {
            return <Home />;
          }
        }}
      />
      <PrivateRoute exact path="/dashboard" component={lazy(() => import('modules/Dashboard'))} />
      <Route
        path="/login"
        render={() => {
          if (isLoggedIn && from) {
            return <Redirect to={from} />;
          } else {
            return <Login />;
          }
        }}
      />
      <Route render={() => { return <Error404 />; }} />
    </Switch>
  );
};

const mapStateToProps = ({ authReducer }) => {
  return {
    isLoggedIn: authReducer.isLoggedIn,
  };
};

export default withRouter(connect(mapStateToProps)(Routes));
