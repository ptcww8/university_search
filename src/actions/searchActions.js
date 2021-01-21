import {
  GET_UNIVERSITIES_LIST_STARTED, GET_UNIVERSITIES_LIST_SUCCESS, GET_UNIVERSITIES_LIST_FAILURE, SET_LOCATION, SET_DESCRIPTION
} from "./actionTypes";
 
// to get the list of users - started
export const getUniversitiesListStarted = () => ({ type: GET_UNIVERSITIES_LIST_STARTED });

 
export const getUniversitiesListSuccess = data => {
  return {
    type: GET_UNIVERSITIES_LIST_SUCCESS,
    payload: {
      data
    }
  }
}

export const getUniversitiesListFailure = error => {
  return {
    type: GET_UNIVERSITIES_LIST_FAILURE,
    payload: {
      error
    }
  }
}

export const setLocation = data => {
  return {
    type: SET_LOCATION,
    payload: {
      data
    }
  }
}

export const setDescription = data => {
  return {
    type: SET_DESCRIPTION,
    payload: {
      data
    }
  }
}


