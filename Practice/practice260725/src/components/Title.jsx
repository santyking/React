import React from "react";

function Title() {
    console.log("title is rendered");
    
  return (
    <div>
      <h1>Normal Counter</h1>
    </div>
  );
}

export default React.memo(Title);
