import React from "react";

function Count({ text, value }) {
  console.log(`count of ${text} is loaded`);
  
  return (
    <div>
      {text}-{value}
    </div>
  );
}

export default React.memo(Count);
