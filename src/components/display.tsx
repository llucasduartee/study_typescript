import React from "react";

interface DisplayProps {
  counter: number;
}

const Display: React.FC<DisplayProps> = (props) => {
  return <h2>{props.counter}</h2>;
};

export default Display;
