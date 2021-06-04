import * as actionTypes from './action-types';

type DispatchProps = {
  type: string;
  payload?: {};
};

type Dispatch = (props: DispatchProps) => void;

export function buildActions(dispatch: Dispatch) {
  return {
    login: (payload: {}) => dispatch({ type: actionTypes.LOGIN, payload }),
    logout: () => dispatch({ type: actionTypes.LOGOUT }),
    setLoading: () => dispatch({ type: actionTypes.SET_LOADING }),
    setLoaded: () => dispatch({ type: actionTypes.SET_LOADED }),
  };
}