import React from "react";

interface AddQuantityProps {
  count: number;
  decrease: ()=> void;
  increase: ()=> void;
}

export const AddQuantity: React.FC<AddQuantityProps> = ({count, decrease, increase}) => {
  return (
    <section className="flex rounded-lg focus:outline-none md:active:border-blue-800 border-solid border-2  md:w-[10rem] md:h-[2rem] gap-0 justify-around items-center w-[8rem] h-[1.8rem]">
      <button 
        className="text-blue-900 text-2xl "
        onClick={decrease}>—</button>
      <p>{count}</p>
      <button 
        className="text-blue-900 text-xl"
        onClick={increase}>+</button>
    </section>
  );
};
  