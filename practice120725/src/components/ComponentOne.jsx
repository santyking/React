import axios from "axios";
import ChildComponent from "./ChildComponent";
import React, { useEffect, useReducer,createContext } from "react";
export const apiContext = createContext();

function ComponentOne() {
  const initialState = {
    loading: true,
    post: {},
    error: "",
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "FETCH_SUCCESS":
        return {
          loading: false,
          post: action.payload,
          error: "",
        };
      case "FETCH_ERROR":
        return {
          loading: false,
          post: {},
          error: "Something went wrong",
        };

      default:
        return state;
    }
  };
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) =>
        dispatch({ payload: response.data, type: "FETCH_SUCCESS" })
      )
      .catch((error) => dispatch({ type: "FETCH_ERROR" }));
  }, []);
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>Posts</h1>
      {state.loading?"loading":state.post.title}
      {state.error?state.error:null}
      <apiContext.Provider value={state.post.title}>
        <ChildComponent/>
      </apiContext.Provider>
    </div>
  );
}

export default ComponentOne;
