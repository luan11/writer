import { createContext, ReactNode, useEffect, useReducer, useRef } from 'react';

import { buildActions, LoginProps } from './build-actions';
import { reducer } from './reducer';

import api from './../../services/api';

import { TOKEN_KEY, getToken } from './../../utils/auth';

const token = getToken();

export type AuthContextData = {
  token: string | null;
  authenticated: boolean;
  loading: boolean;
};

export const initialState: AuthContextData = {
  token: token,
  authenticated: token ? true : false,
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
  doLogin: (payload: LoginProps) => void;
  doLogout: () => void;
};

export const AuthContext = createContext({} as AuthContextProps);

type AuthContextProviderProps = {
  children: ReactNode;
};

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const actions = useRef(buildActions(dispatch));

  const { token } = state;

  useEffect(() => {
    api.defaults.headers['Authorization'] = `Bearer ${token}`;
  }, [token]);

  function doLogin(payload: LoginProps) {
    localStorage.setItem(TOKEN_KEY, payload.token);

    actions.current.login(payload);
  }

  function doLogout() {
    localStorage.removeItem(TOKEN_KEY);

    actions.current.logout();
  }

  return (
    <AuthContext.Provider value={{
      state,
      actions: actions.current,
      doLogin,
      doLogout,
    }}>
      {children}
    </AuthContext.Provider>
  );
}