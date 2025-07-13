import React from "react";

function Title() {
    console.log("Title is loaded");
    
  return (
    <div>
      <h1>Age & Salary Counter</h1>
    </div>
  );
}

export default React.memo(Title);
