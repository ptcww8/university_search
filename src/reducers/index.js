import {
  GET_UNIVERSITIES_LIST_STARTED, GET_UNIVERSITIES_LIST_SUCCESS, GET_UNIVERSITIES_LIST_FAILURE, SET_DESCRIPTION, SET_LOCATION
} from "../actions/actionTypes";
 
// define initial state of user
const initialState = {
  data: null,
  loading: false,
  error: null,
  location: "ghana",
  description:""
}
 
// update store based on type and payload and return the state
export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case GET_UNIVERSITIES_LIST_STARTED:
      return {
        ...state,
        loading: true
      }
    case GET_UNIVERSITIES_LIST_SUCCESS:
      const { data } = action.payload;
      return {
        ...state,
        data,
        loading: false
      }
    case GET_UNIVERSITIES_LIST_FAILURE:
      const { error } = action.payload;
      return {
        ...state,
        error
      }
      
    case SET_DESCRIPTION:
      return {
        ...state,
        description: action.payload.data
      }
    case SET_LOCATION:
      return {
        ...state,
        location: action.payload.data
      }
    default:
      return state
  }
}