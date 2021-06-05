import { NavLink } from 'react-router-dom';

import useAuthContext from './../../hooks/useAuthContext';

import { AiOutlineLogout } from 'react-icons/ai';

import { Container, Nav, MyNavLink } from './styles';

export function Header() {
  const { state: { authenticated }, doLogout } = useAuthContext();

  return (
    <Container>
      <div className="container">
        <h1><NavLink to="/" exact>Writer</NavLink></h1>

        <Nav>
          <MyNavLink activeClassName="active" to="/posts" exact>Posts</MyNavLink>
          {
            authenticated
            && <MyNavLink activeClassName="active" to="/posts/new" exact>Criar Post</MyNavLink>
          }
        </Nav>

        <Nav>
          {
            authenticated
              ? <button className="btn error" type="button" onClick={doLogout}>
                <AiOutlineLogout />
                  Logout
                </button>
              : <NavLink className="btn" to="/sign-up" exact>Criar conta</NavLink>
          }
        </Nav>
      </div>
    </Container>
  );
}