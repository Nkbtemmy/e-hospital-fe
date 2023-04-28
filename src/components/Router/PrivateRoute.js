import React from 'react';
import { Route, redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const accessToken = localStorage.getItem('access-token');

  return (
    <Route
      {...rest}
      render={(props) =>
        accessToken ? (
          <Component {...props} />
        ) : (
          <redirect
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

export default PrivateRoute;