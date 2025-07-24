import CompA from "./components/CompA";
import CompB from "./components/CompB";
import CompC from "./components/CompC";
import "./App.css";
import { createContext, useReducer } from "react";
export const CountContext = createContext();

function App() {
  const initialState = 0;
  const reducer = (state, action) => {
    switch (action) {
      case "add":
        return state + 1;
      case "sub":
        return state - 1;
      case "res":
        return initialState;
      default:
        state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <CountContext.Provider value={{countState:state,countDispatch:dispatch}}>
      <>
        {state}
        <CompA />
        <CompB />
        <CompC />
      </>
    </CountContext.Provider>
  );
}

export default App;
