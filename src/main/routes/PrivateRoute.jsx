import React from 'react';
import { Redirect, Route, withRouter } from 'react-router-dom';

const PrivateRoute = withRouter(({ component: Component, isLoggedIn, ...rest }) => {
  const componentCheck = props => {
    const previousUrl = props.location;
    if (isLoggedIn) {
      return <Component {...props} />;
    } else {
      return <Redirect to={{ pathname: `/login?next=` + previousUrl.pathname, state: { from: previousUrl } }} />;
    }
  };

  return <Route {...rest} render={props => componentCheck(props)} />;
});

export default PrivateRoute;
