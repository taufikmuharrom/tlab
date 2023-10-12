import React from "react";

const Hero: React.FC = () => {
  return (
    <div className="bg-cover bg-hero bg-center h-[540px] text-white flex items-center">
      <div className="container mx-auto text-center">
        <h1 className="md:text-3xl  md:text-6xl font-extrabold leading-tight mb-4">
          Pilih Game Favorite Kalian
        </h1>
        <div className=" flex justify-center">
          <p className="text-base  md:text-base w-1/4">
            Shortbread cookie tootsie roll sugar plum cheesecake pudding
            croissant apple pie. Lollipop macaroon lollipop croissant chocolate
            cake croissant fruitcake brownie jelly-o.
          </p>
        </div>
        <div className="mt-8">
          <button className="bg-white text-white md:bg-blue-500 px-6 py-2 rounded-lg text-lg font-semibold hover:bg-blue-500 hover:text-white">
            Sign Up For Free Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
