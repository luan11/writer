import { useContext } from 'react';

import { AuthContext } from './../../contexts/AuthContext';

function useAuthContext() {
  const context = useContext(AuthContext);

  if (typeof context === 'undefined') {
    throw new Error('You have to use useAuthContext inside <AuthContextProvider />');
  }

  return {...context};
}

export default useAuthContext;