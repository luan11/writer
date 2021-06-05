import { Route, RouteProps, Redirect } from 'react-router-dom';

interface ProtectedRouteProps extends RouteProps {
  rule: boolean;
  redirect?: string;
}

function ProtectedRoute({ rule, redirect, ...props }: ProtectedRouteProps) {

  return (
    rule ? (
      <Route {...props} />
    ) : (
      <Redirect to={redirect ?? '/'} />
    )
  );
}

export default ProtectedRoute;