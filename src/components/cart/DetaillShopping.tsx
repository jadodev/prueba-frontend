import React from "react";

export const DetailsShopping: React.FC = () => {
    return (
      <section className="bg-gray-100 p-4 w-full md:w-[400px] md:h-[220px] flex flex-col justify-center gap-6 rounded-lg 
      md:fixed sm:max-w-[280px]">
        <h2 className="text-black font-bold text-xl">Resumen de compra</h2>
        <p className="text-black text-sm opacity-2">Productos (9)</p>
        <div className="flex justify-between text-lg">
          <p className="text-black">Total: </p>
          <p className="font-bold">$9000</p>
        </div>
        <button className="rounded-lg py-2 text-white bg-sky-500/100">
          Continuar compra
        </button>
      </section>
    );
  };