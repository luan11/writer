import { TOKEN_KEY } from '.';
import api from './../../services/api';

import * as actionTypes from './action-types';

type DispatchProps = {
  type: string;
  payload?: {};
};

type Dispatch = (props: DispatchProps) => void;

export type LoginProps = {
  token: string;
  authenticated: boolean;
};

export function buildActions(dispatch: Dispatch) {
  return {
    login: (payload: LoginProps) => {
      api.interceptors.request.use(async config => {
        config.headers.Authorization = `Bearer ${payload.token}`;

        return config;
      });

      localStorage.setItem(TOKEN_KEY, payload.token);

      dispatch({ type: actionTypes.LOGIN, payload });
    },
    logout: () => {
      localStorage.removeItem(TOKEN_KEY);

      dispatch({ type: actionTypes.LOGOUT })
    },
    setLoading: () => dispatch({ type: actionTypes.SET_LOADING }),
    setLoaded: () => dispatch({ type: actionTypes.SET_LOADED }),
  };
}