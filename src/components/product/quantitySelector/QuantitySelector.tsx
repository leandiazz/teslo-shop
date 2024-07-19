"use client";

import { useState } from "react";
import { IoAddCircleOutline, IoRemoveCircleOutline } from "react-icons/io5";

interface Props {
  quantity: number;
}

export const QuantitySelector: React.FC<Props> = ({ quantity }) => {
  const [count, setCount] = useState(quantity);

  const onQuantityChange = (value: number) => {
    if (count + value < 1 || count + value > 5) return;

    setCount(count + value);
  };

  return (
    <div className="flex">
      <button type="button" onClick={() => onQuantityChange(-1)}>
        <IoRemoveCircleOutline size={30} />
      </button>
      <span className="leading-loose w-20 mx-3 px-5 bg-gray-200 text-center rounded">
        {count}
      </span>
      <button type="button" onClick={() => onQuantityChange(1)}>
        <IoAddCircleOutline size={30} />
      </button>
    </div>
  );
};
