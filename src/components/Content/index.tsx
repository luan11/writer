import { Switch } from 'react-router-dom';
import ProtectedRoute from './../ProtectedRoute';

import useAuthContext from './../../hooks/useAuthContext';

import { Login } from './../../pages/Login';
import { SignUp } from './../../pages/SignUp';
import { Posts } from './../../pages/Posts';
import { NewPost } from './../../pages/NewPost';

import { Container } from './styles';

export function Content() {
  const { state: { authenticated } } = useAuthContext();

  return (
    <Container>
      <Switch>
        <ProtectedRoute rule={!authenticated} redirect="/posts" exact path="/" component={Login} />
        <ProtectedRoute rule={!authenticated} redirect="/posts" exact path="/sign-up" component={SignUp} />
        <ProtectedRoute rule={authenticated} exact path="/posts" component={Posts} />
        <ProtectedRoute rule={authenticated} exact path="/posts/new" component={NewPost} />
      </Switch>
    </Container>
  );
}