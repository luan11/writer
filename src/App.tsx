import { BrowserRouter as Router } from 'react-router-dom';

import GlobalStyle from './theme/globalStyle';

import { AuthContextProvider } from './contexts/AuthContext';

import { Header } from './components/Header';
import { Content } from './components/Content';

function App() {
  return (
    <AuthContextProvider>
      <GlobalStyle />

      <Router>
        <Header />
        <Content />
      </Router>
    </AuthContextProvider>
  );
}

export default App;
