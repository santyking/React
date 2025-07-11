import axios from "axios";
import { useReducer, useEffect } from "react";

function ApiReducer() {
  const initialState = {
    post: {},
    error: "",
    loading: true,
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "FETCH_SUCCESS":
        return {
          loading: false,
          error: "",
          post: action.payload,
        };
      case "FETCH_ERROR":
        return {
          loading: false,
          error: action.payload,
          post: {},
        };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        dispatch({ type: "FETCH_SUCCESS", payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: "FETCH_ERROR" ,payload : error});
      });
  }, []);
  return (
    <>
      <h1>Post</h1>
      {state.loading ? "Loading" : state.post.title}
      {state.error ? state.error : null}
    </>
  );
}

export default ApiReducer;
