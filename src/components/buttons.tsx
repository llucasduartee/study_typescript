import React from "react";

interface ButtonProps {
  counter: number;
  setCounter: React.Dispatch<React.SetStateAction<number>>;
}

const Buttons = ({ counter, setCounter }: ButtonProps) => {
  const add = () => {
    setCounter(counter + 1);
  };

  const subtract = () => {
    setCounter(counter - 1);
  };

  return (
    <div>
      <button onClick={add}>+</button>
      <button onClick={subtract}>-</button>
    </div>
  );
};

export default Buttons;
