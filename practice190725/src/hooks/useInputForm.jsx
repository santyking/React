import { useState } from "react";

function useInputForm(initialValue) {
  const [givenname, setGivenName] = useState(initialValue);
  const reset = () => {
    setGivenName(initialValue);
  };
  const bind = {
    givenname,
    onChange: (e) => setGivenName(e.target.value),
  };
  return [givenname,bind,reset];
}
export default useInputForm;
