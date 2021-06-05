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
    login: (payload: LoginProps) => dispatch({ type: actionTypes.LOGIN, payload }),
    logout: () => dispatch({ type: actionTypes.LOGOUT }),
    setLoading: () => dispatch({ type: actionTypes.SET_LOADING }),
    setLoaded: () => dispatch({ type: actionTypes.SET_LOADED }),
  };
}