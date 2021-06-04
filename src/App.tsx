import { 
  BrowserRouter as Router, 
  Switch, 
  Route 
} from 'react-router-dom';

import ProtectedRoute from './components/ProtectedRoute';

import GlobalStyle from './theme/globalStyle';

import { AuthContextProvider } from './contexts/AuthContext';

import { Header } from './components/Header';
import { Content } from './components/Content';

import { Login } from './pages/Login';
import { SignUp } from './pages/SignUp';
import { Posts } from './pages/Posts';

function App() {
  return (
    <AuthContextProvider>
      <GlobalStyle />

      <Router>
        <Header />
        <Content>
          <Switch>
            <Route path="/" component={Login} />
            <Route path="/sign-up" component={SignUp} />
            <ProtectedRoute path="/posts" component={Posts} /> 
          </Switch>
        </Content>
      </Router>
    </AuthContextProvider>
  );
}

export default App;
