// src/components/PrivateRoute.js

import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { getCurrentUser } from '../services/authService';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const currentUser = getCurrentUser();

  return (
    <Route
      {...rest}
      render={(props) =>
        currentUser ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRoute;
