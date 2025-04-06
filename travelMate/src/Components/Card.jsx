import React from "react";
import { Link } from "react-router-dom";

const Card = ({ image, name, rating, description, buttonText }) => {
  return (
    <div className="max-w-[350px] flex flex-col h-[350px] rounded-2xl  bg-white  border border-gray-200  hover:shadow-2xl">
      <div className="relative w-full  bg-gray-200 rounded-t-2xl overflow-hidden h-[50%]" >
        {image ? (
          <img src={image} className="w-full h-full object-cover" />
        ) : (
          <div className="flex items-center justify-center w-full h-full text-gray-400">No Image</div>
        )}
      </div>
      <div className="mt-4 px-3  flex flex-col space-y-2 ">

        <div className="flex items-center justify-between gap-1 text-sm mt-1">
          <h3 className="text-lg font-semibold">{name}</h3>
          <span className="text-black font-medium">⭐ {rating}</span>
        </div>
        <p className="text-gray-600 text-sm mt-2">{description}</p>
        <Link to={'/tour/' + name}>
          <button className="mt-3 px-4 py-2  text-black rounded-2xl border-1 border-black/20">
            {buttonText}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
