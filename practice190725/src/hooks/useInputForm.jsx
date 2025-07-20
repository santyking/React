import { useState } from "react";

function useInputForm(initialValue) {
  const [givenname, setGivenName] = useState(initialValue);
  const reset = () => {
    setGivenName(initialValue);
    console.log("initial Value is ",initialValue,"name is ",givenname);
  };
  const bind = {
    value : givenname,
    onChange: (e) => setGivenName(e.target.value),
  };
  return [givenname,bind,reset];
}
export default useInputForm;
