import React from "react";

const Header = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.description}</p>
      <h1>Button Click</h1>
      <button onClick={props.BtClick}> Click it</button>
    </div>
  );
};

export default Header;
