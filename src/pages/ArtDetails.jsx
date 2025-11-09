import React, { use, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAxios from '../hooks/useAxios';
import { FaHeart, FaThumbsUp } from 'react-icons/fa';
import toast from 'react-hot-toast';
import { GiLoveHowl } from 'react-icons/gi';
import { FaClover } from 'react-icons/fa6';
import Authcontext from '../context/Authcontext';

const ArtDetails = () => {
    const {user}= use(Authcontext);
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

    const newArt = {
        art:art?._id,
        imageUrl:art?.imageUrl,
        title: art?.title,
        category:art?.category,
        userName:art?.userName,
        description:art?.description,
        totalArtworks:art?.totalArtworks,
        favorite_by:user?.email,

    }
    // post to my favorite
    const handleFavorite = ()=>{
        axiosInstance.post(`/favorites`,newArt)
        .then(data=>{
            console.log(data.data);
            if(data.data.insertedId){
                toast.success("Art added to my favorite section");
            }
        })
        .catch(error=>{
            toast.error('you have already added it to my favorites')
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
                <button onClick={handleFavorite} className='btn btn-primary'><FaHeart/>Add To Favorite</button>
                
                <button onClick={handleLike} className='btn btn-accent rounded-full'><FaThumbsUp />Like</button>
            </div>

        </div>
    );
};

export default ArtDetails;