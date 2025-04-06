import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
const TourCard = ({ image, tags, title, rating, location, duration, groupSize, description, price, n }) => {

  return (
    <div className="flex border border-gray-300 rounded-2xl overflow-hidden shadow-sm bg-white w-full max-w-3.4xl min-h-[300px]">
      {/* Image Section */}
      <div className="w-1/3 bg-gray-200 h-[300px] flex items-center justify-center">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      {/* Content Section */}
      <div className="w-2/3 px-4 py-4 space-y-6">
        {/* Tags */}
        <div className="flex space-x-2 mb-2">
          {tags.map((tag, index) => (
            <span key={index} className="bg-gray-200 text-gray-800 text-xs font-medium px-2 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>

        {/* Title & Rating */}
        <div className="flex justify-between items-center mt-1">
          <h3 className="text-lg font-semibold">{title}</h3>
          <span className="text-sm text-gray-600">⭐ {rating}</span>
        </div>

        {/* Location */}
        <p className="text-gray-500 text-sm">📍 {location}</p>

        {/* Duration & Group Size */}
        <div className="flex text-gray-500 text-sm mt-2 space-x-4">
          <span>⏳ {duration}</span>
          <span>👥 Up to {groupSize}</span>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm mt-2 truncate">{description}</p>

        {/* Price & Button */}
        <div className="flex justify-between items-center mt-4">
          <p className="text-xl font-bold">${price} <span className="text-sm text-gray-500">/ per person</span></p>
          <Link to={'/tour/' + n + '/' + title}>
            <button className="bg-black text-white px-5 py-3 text-sm rounded-lg hover:bg-gray-800">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TourCard;
