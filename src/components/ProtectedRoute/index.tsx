import { Route, RouteProps, Redirect } from 'react-router-dom';

import useAuthContext from './../../hooks/useAuthContext';

function ProtectedRoute(props: RouteProps) {
  const { state } = useAuthContext();

  const { authenticated } = state;

  return (
    authenticated ? (
      <Route {...props} />
    ) : (
      <Redirect to="/" />
    )
  );
}

export default ProtectedRoute;