import * as consts from '../constants';
import axios from "axios";

export function fetchUsers(){

  return function(dispatch){
    axios.get('https://reqres.in/api/users?page=1')
      .then((response) => {
        dispatch({type: consts.FETCH_USERS_FULFILLED, payload:response.data.data});
      })
      .catch((err) => {
        dispatch({type: consts.FETCH_USERS_REJECTED, payload:err})
      })
  }
}