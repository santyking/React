import { useReducer, createContext } from "react";
import CompA from "./components/CompA";
import CompB from "./components/CompB";
import CompC from "./components/CompC";
import "./App.css";
export const CountContext = createContext();

function App() {
  const initialCount = {
    myCount: 0,
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "add":
        return { myCount: state.myCount + 1 };
      case "sub":
        return { myCount: state.myCount - 1 };
      case "res":
        return initialCount;
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialCount);
  return (
    <CountContext.Provider
      value={{ countState: state, CountDispatch: dispatch }}
    >
      <div className="App">
        {state.myCount}
        <CompA />
        <CompB />
        <CompC />
      </div>
    </CountContext.Provider>
  );
}

export default App;
