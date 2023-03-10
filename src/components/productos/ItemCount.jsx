import React, { useState } from "react";

const ItemCount = ({ initial, stock }) => {
  const [count, setCount] = useState(initial);
  const restar = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const sumar = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };
  return (
    <>
      <div className="max-w-[300px] min-w-[200px] flex justify-around items-center mx-8 bg-slate-800 rounded-md text-white">
        <button className="text-6xl" onClick={restar}>
          -
        </button>
        <span className="text-4xl">{count}</span>
        <button className="text-4xl" onClick={sumar}>
          +
        </button>
      </div>
    </>
  );
};

export default ItemCount;
