import React from "react";

type ButtonAddCartProps = {
  onClick: () => void;
};

export const ButtonAddCart = ({ onClick }: ButtonAddCartProps) => {
  return <button onClick={onClick}>Add to cart</button>;
};