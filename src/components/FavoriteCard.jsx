import React, { useState } from 'react';
import { FaThumbsUp } from 'react-icons/fa';
import { IoHeartDislike } from 'react-icons/io5';
import useAxios from '../hooks/useAxios';
import toast from 'react-hot-toast';
import useAxiosSecure from '../hooks/useAxiosSecure';
import { BiDetail } from 'react-icons/bi';
import { Link } from 'react-router';

const FavoriteCard = ({favorite,setRefetch,refetch}) => {
   
    const axiosInstance = useAxios();
    // const instanceSecure = useAxiosSecure();

    const handleUnfavorite = ()=>{
        console.log(favorite?._id);
        axiosInstance.delete(`/favorites/${favorite?._id}`)
        .then(data=>{
            console.log(data.data);
            if(data.data.deletedCount){
                toast.success("Unfavoriting Successful")
               setRefetch(!refetch);
            }
            
        })
    }
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

        <div className="flex gap-2 mt-1 justify-between items-center">
          <div className="badge badge-outline">{favorite?.category}</div>
            <button onClick={handleUnfavorite} className='btn btn-sm rounded-full'><IoHeartDislike color='red' className='text-xl'/>Unfavorite</button>
         
        </div>
           
        
      </div>
    </div>
    );
};

export default FavoriteCard;