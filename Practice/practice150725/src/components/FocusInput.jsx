import React, { useEffect, useRef, useState } from "react";

function FocusInput() {
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus()
  }, [])
  
  return (
    <div>
      <h1>Focus Input</h1>
      <input ref={inputRef} type="text" />
    </div>
  );
}

export default FocusInput;
