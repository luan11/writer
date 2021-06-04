import { createContext, ReactNode, useReducer, useRef } from 'react';

import { buildActions } from './build-actions';
import { reducer } from './reducer';

export type AuthContextData = {
  token: string|null;
  authenticated: boolean;
  loading: boolean;
};

export const initialState: AuthContextData = {
  token: null,
  authenticated: false,
  loading: false
};

type AuthContextProps = {
  state: AuthContextData;
  actions: {};
};

export const AuthContext = createContext({} as AuthContextProps);

type AuthContextProviderProps = {
  children: ReactNode;
};

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const actions = useRef(buildActions(dispatch));

  return (
    <AuthContext.Provider value={{
      state,
      actions: actions.current,
    }}>
      {children}
    </AuthContext.Provider>
  );
}