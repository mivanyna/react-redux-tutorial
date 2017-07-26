import * as consts from '../constants';

const initialState = {
  users:[],
  fetching: false,
  fetched: false,
  error: null
};

export default function userReducer(state=initialState, action = {}) {
  switch(action.type) {
    case consts.FETCH_USERS: {
      return {...state, fetching: false}
    }
    case consts.FETCH_USERS_FULFILLED: {
      return {
        ...state,
        fetching: false,
        fetched: true,
        users: action.payload
      }
    }
    case consts.FETCH_USERS_REJECTED: {
      return {
        ...state,
        fetching: false,
        error: action.payload
      }
    }
  }
  return state;
}