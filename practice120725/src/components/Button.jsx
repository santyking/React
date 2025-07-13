import React from "react";

function Button({ action, children }) {
    console.log(`buton of ${children} is loaded`);
    
  return (
    <div>
      <button onClick={action}>{children}</button>
    </div>
  );
}

export default React.memo(Button);
