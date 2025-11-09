import React from 'react';
import { FaThumbsUp } from 'react-icons/fa';

const FavoriteCard = ({favorite}) => {
    return (
     <div className="card  bg-base-100 shadow-xl transition-all  hover:-translate-y-2">
      <div className="w-full h-48 overflow-hidden rounded-t-xl">
        <img
          src={favorite?.imageUrl}
          alt={favorite?.title}
          className="w-full h-52 bg-amber-200 object-cover"
        />
      </div>

      <div className="p-4 flex flex-col gap-2">
        <h2 className="text-lg font-semibold leading-tight">
          {favorite?.title}
        </h2>

        <p className="text-sm text-gray-500">
          Art By: <span className="font-medium">{favorite?.userName}</span>
        </p>

        <div className="flex gap-2 mt-1">
          <div className="badge badge-outline">{favorite?.category}</div>
          <div className="badge badge-outline"><FaThumbsUp/>{favorite?.likes} </div>

        </div>

        
      </div>
    </div>
    );
};

export default FavoriteCard;