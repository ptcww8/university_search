import {
  getUniversitiesListStarted, getUniversitiesListSuccess, getUniversitiesListFailure
} from "./searchActions";

// get user list
export const getUniversitiesList = (description= "", country="") => async dispatch => {
  dispatch(getUniversitiesListStarted());
  try {
    const res = await fetch(`https://cors-anywhere.herokuapp.com/http://universities.hipolabs.com/search?name_contains=${description}&country=${country}`);
    const data = await res.json();
    dispatch(getUniversitiesListSuccess(data));
  } catch (err) {
    console.log("SHABAYA"+err.message);
    dispatch(getUniversitiesListFailure(err.message));
  }
}