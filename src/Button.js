import React from "react";

const Button = ( { text,showAlert} ) => {
    return (
     <>
     <div>
        <h2>Child Component</h2>
      <button onClick={showAlert}>{text}</button>
      </div>
     </>

    );
}
export default Button;