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

const Context = createContext({});

type AuthContextProviderProps = {
  children: ReactNode;
};

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const actions = useRef(buildActions(dispatch));

  return (
    <Context.Provider value={[
      state,
      actions.current
    ]}>
      {children}
    </Context.Provider>
  );
}