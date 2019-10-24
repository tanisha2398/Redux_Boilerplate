import { FETCH_POST, NEW_POST } from "./types";
import axios from "axios";
export const fetchPosts = () => {
  return dispatch => {
    console.log("fetching");
    axios.get("https://jsonplaceholder.typicode.com/posts").then(res =>
      dispatch({
        type: FETCH_POST,
        payload: res.data
      })
    );
  };
};
export const createPost = postData => {
  return dispatch => {
    console.log("action called");
    axios
      .post("https://jsonplaceholder.typicode.com/posts", postData)
      .then(res =>
        dispatch({
          type: NEW_POST,
          payload: res.data
        })
      );
  };
};
// export default fetchPosts;
