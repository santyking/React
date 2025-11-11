import React from "react";

export const Navbar = () => {
  return (
    <div className="w-screen">
      <div className="bg-fuchsia-950 text-white pl-10 py-4 font-bold flex justify-between items-center">
        <div className="flex justify-start">Contosso</div>
        <div>
          <ul className="flex justify-center">
            <li className="px-5 cursor-pointer">Home</li>
            <li className="px-5 cursor-pointer">About</li>
            <li className="px-5 cursor-pointer">Contact</li>
          </ul>
        </div>
        <div className="flex justify-end pr-10">Santosh Mhatre</div>
      </div>
    </div>
  );
};
