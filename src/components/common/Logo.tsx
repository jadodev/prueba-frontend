import React from "react";

export const Logo: React.FC = () => {
  return (
    <div>
      <img
        src="/Logo.svg" 
        alt="logo"
        className="md:w-[62px] w-[40px]"
      />
    </div>
  );
};
