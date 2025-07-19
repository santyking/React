import axios from "axios";
import React, { useEffect, useReducer } from "react";

function ListItems() {
  const initialState = {
    loading: true,
    posts: {},
    error: "",
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "FETCH_SUCCESS":
        return {
          loading: false,
          posts: action.payload,
          error: "",
        };
      case "FETCH_ERROR":
        return {
          loading: false,
          posts: {},
          error: "An error Occured",
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
      .catch((error) => dispatch({ type: "FETCH_ERROR", payload: error }));
  }, []);
  return (
    <div>
      <h1>List of Posts</h1>
      {
        state.loading?"Loading":state.posts.title
      }
    </div>
  );
}

export default ListItems;
