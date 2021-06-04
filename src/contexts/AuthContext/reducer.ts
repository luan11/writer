import { AuthContextData } from '.';

import * as actionTypes from './action-types';

type ActionProps = {
  type: string;
  payload?: {};
};

export function reducer(state: AuthContextData, action: ActionProps) {
  switch(action.type) {
    case actionTypes.LOGIN:
      return { ...state, ...action.payload };

    case actionTypes.LOGOUT:
      return { ...state, token: null, authenticated: false }

    case actionTypes.SET_LOADING:
      return { ...state, loading: true }

    case actionTypes.SET_LOADED:
      return { ...state, loading: false }
  }

  return state;
}