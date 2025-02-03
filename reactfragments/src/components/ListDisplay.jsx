import React from "react";

function ListDisplay() {
  const nameList = ["Santosh", "Anvi", "Ankita"];

  return (
    <div>
      {
        nameList.map((name,index)=>(
            <React.Fragment key={index}>
                <p>{name}</p>
            </React.Fragment>
        ))
      }
    </div>
  );
}

export default ListDisplay;
