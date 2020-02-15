import { key } from '../../config/key.json';

export const signIn = credentials => async (dispatch, getState) => {
  dispatch({ type: 'SIGN_IN', credentials });
};

export const signUp = credentials => (dispatch, getState) => {
  dispatch({ type: 'SIGN_UP', credentials });
};