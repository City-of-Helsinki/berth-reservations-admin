import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';

const PrivateRoute: React.SFC<RouteProps> = ({
  component,
  children,
  ...rest
}) => {
  const user = localStorage.getItem('user'); // TODO: remove

  return (
    <Route
      {...rest}
      render={({ location }) => {
        if (user) return children;

        return (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};

export default PrivateRoute;
