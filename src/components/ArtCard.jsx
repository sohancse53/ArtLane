import React from "react";
import { Link } from "react-router";

const ArtCard = ({art}) => {
  return (
    <div className="card  bg-base-100 shadow-xl transition-all  hover:-translate-y-2">
      <div className="w-full h-48 overflow-hidden rounded-t-xl">
        <img
          src={art.imageUrl}
          alt={art.title}
          className="w-full h-52 bg-amber-200 object-cover"
        />
      </div>

      <div className="p-4 flex flex-col gap-2">
        <h2 className="text-lg font-semibold leading-tight">
          {art.title}
        </h2>

        <p className="text-sm text-gray-500">
          Art By: <span className="font-medium">{art.userName}</span>
        </p>

        <div className="flex gap-2 mt-1">
          <div className="badge badge-outline">{art.category}</div>
        </div>

        <div className="mt-3">
          <Link to={`/art-details/${art._id}`} className="btn btn-primary w-full text-sm">View Details</Link>
        </div>
      </div>
    </div>
  );
};

export default ArtCard;
