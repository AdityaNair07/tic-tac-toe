import React from "react";

const Square = (props) => {
  return (
    <>
      <div
        onClick={props.onClick}
        className={`square ${props.active ? "active" : ""}`}
      >
        {props.value}
      </div>
    </>
  );
};

export default Square;
