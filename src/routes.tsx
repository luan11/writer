import {
  Redirect,
  Route,
  RouteProps
} from 'react-router-dom';

import { isAuthenticated } from './services/auth';

interface PrivateRouteProps extends RouteProps { };

function PrivateRoute(props: PrivateRouteProps) {
  return (
    isAuthenticated() ? (
      <Route {...props} />
    ) : (
      <Redirect to="/" />
    )
  );
}