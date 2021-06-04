import { NavLink } from 'react-router-dom';

export function Header() {
  return (
    <div className="container">
      <h1>Writer</h1>

      <nav>
        <ul>
          <li><NavLink to="/" exact>Login</NavLink></li>
          <li><NavLink to="/sign-up" exact>Cadastro</NavLink></li>
          <li><NavLink to="/posts" exact>Posts</NavLink></li>
        </ul>
      </nav>
    </div>
  );
}