import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAxios from '../hooks/useAxios';
import { FaThumbsUp } from 'react-icons/fa';
import toast from 'react-hot-toast';

const ArtDetails = () => {
    const [art,setArt] = useState(null);
    const [refetch,setRefetch] = useState(false);
    const {id} = useParams();
    const axiosInstance = useAxios();
    console.log(id);

    // fetch art by id
    useEffect(()=>{
     axiosInstance.get(`artworks/${id}`)
    .then(data=>{
        console.log(data.data);
        setArt(data.data)
    })
    },[id,axiosInstance,refetch])


    // increase like onclick
    const handleLike = ()=>{
           axiosInstance.put(`artworks/${id}`)
           .then(data=>{
            console.log(data.data);
            if(data.data.modifiedCount){
               
                toast('Liked');
                setRefetch(!refetch);
            }
            
           })
    }
    return (
        <div className='mt-10 space-y-2'>
           <img className='h-52 w-full object-cover bg-amber-200' src={art?.imageUrl} alt="" />
           <p className='text-3xl font-semibold'>Title: {art?.title}</p>
           <p>Artist: {art?.userName}</p>
           <p>description: {art?.description}</p>
           <p>total Artworks: {art?.totalArtworks}</p>
           <p className='btn btn-sm btn-dash '>Total likes: {art?.likes}</p>
            <div className='flex justify-start gap-5'>
                <button className='btn btn-primary'>Add Favorite</button>
                
                <button onClick={handleLike} className='btn btn-accent rounded-full'><FaThumbsUp />Like</button>
            </div>

        </div>
    );
};

export default ArtDetails;