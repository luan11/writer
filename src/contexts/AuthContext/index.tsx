import { createContext, ReactNode, useEffect, useReducer, useRef } from 'react';

import { buildActions, LoginProps } from './build-actions';
import { reducer } from './reducer';

export type AuthContextData = {
  token: string | null;
  authenticated: boolean;
  loading: boolean;
};

export const initialState: AuthContextData = {
  token: null,
  authenticated: false,
  loading: false
};

type Actions = {
  login: (payload: LoginProps) => void;
  logout: () => void;
  setLoading: () => void;
  setLoaded: () => void;
};

type AuthContextProps = {
  state: AuthContextData;
  actions: Actions;
};

export const AuthContext = createContext({} as AuthContextProps);

type AuthContextProviderProps = {
  children: ReactNode;
};

export const TOKEN_KEY = '@writer-Token';

function getToken() {
  return localStorage.getItem(TOKEN_KEY);
}

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const actions = useRef(buildActions(dispatch));

  useEffect(() => {
    const token = getToken();

    if (token) {
      actions.current.login({
        token: token,
        authenticated: true
      });
    }
  }, []);

  return (
    <AuthContext.Provider value={{
      state,
      actions: actions.current,
    }}>
      {children}
    </AuthContext.Provider>
  );
}