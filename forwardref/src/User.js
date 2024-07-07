import React,{forwardRef} from "react";
function User(props,refer) {
    return(
        <div>
            <input type="text" ref={refer}/>
        </div>
    )
}
export default forwardRef(User);