import React, { use, useEffect, useState } from 'react';
import useAxios from '../hooks/useAxios';
import Authcontext from '../context/Authcontext';
import MyGalleryCard from '../components/MyGalleryCard';

const MyGallery = () => {
    const axiosInstance = useAxios();
    const {user} = use(Authcontext);
    const [arts,setArts] = useState([]);

    useEffect(()=>{
        axiosInstance.get(`/artworks?email=${user?.email}`)
        .then(data=>{
            console.log(data.data);
            setArts(data.data);
        })
    },[axiosInstance,user]);

    return (
        <div>
        <title>My Gallery</title>
      <h2 className="text-3xl text-center my-5 font-bold">My Gallery</h2>

        <div className='grid gap-5'>
            {
                arts.map(art=><MyGalleryCard
                key={art?._id}
                art={art}
                />)
            }
        </div>

        </div>
    );
};

export default MyGallery;