import React from "react";

const Footer = (props) => {
  return (
    <div>
      <h1>this is footer page </h1>

      <ul>
        <li> name : {props.item["name"]}</li>

        <li> ID : {props.item["id"]}</li>

        <li> uiversity : {props.item["university"]}</li>
      </ul>
    </div>
  );
};

export default Footer;
