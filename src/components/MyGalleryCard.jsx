import React from 'react';
import { FaThumbsUp } from 'react-icons/fa';

const MyGalleryCard = ({art}) => {
    return (
        <div className='p-5 space-y-2 shadow border border-red-100'>
            <img className='h-56 w-full object-cover ' src={art?.imageUrl} alt={art?.title} />
            <h2 className='text-2xl font-semibold'>{art?.title}</h2>
            <p className='text-slate-600'>Category: {art?.category}</p>
            <p>Dimension: {art?.dimensions}</p>
            <p> Des: {art?.description}</p>
            <p>Price: ${art?.price}</p>
            <p className='btn btn-xs'><FaThumbsUp className='text-xl'/>{art?.likes}</p>
            <div className='flex gap-5 items-center '>
                <button className='btn btn-secondary'>Update</button>
                <button className='btn btn-primary'>Remove Art</button>
            </div>

        </div>
    );
};

export default MyGalleryCard;