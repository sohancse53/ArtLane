import React, { use, useEffect, useState } from 'react';
import useAxios from '../hooks/useAxios';
import Authcontext from '../context/Authcontext';
import MyGalleryCard from '../components/MyGalleryCard';
import useAxiosSecure from '../hooks/useAxiosSecure';
import LoadingSpinner from '../components/LoadingSpinner';

const MyGallery = () => {
    const [loading,setLoading]= useState(false);
    // const axiosInstance = useAxios();
    const axiosInstance = useAxios();
    const {user} = use(Authcontext);
    const [arts,setArts] = useState([]);
    const [refetch,setRefetch] = useState(false);

    useEffect(()=>{
        setLoading(true);
        axiosInstance.get(`/artworks?email=${user?.email}`)
        .then(data=>{
            // console.log(data.data);
            setArts(data.data);
            setLoading(false)
        })
    },[axiosInstance,user,refetch]);

    return (
        <div className='space-y-5'>
        <title>My Gallery</title>
       <div className="mt-5">
       <h2 className="text-3xl text-center  font-bold text-primary">My Gallery</h2>
      <p className="text-center text-gray-600">Total found- <span className="text-primary font-bold">{arts.length}</span> Arts</p>
     </div>

     {
        loading?
        <LoadingSpinner/>
        :   <div className='grid gap-5'>
            {
                arts.map(art=><MyGalleryCard
                key={art?._id}
                art={art}
                refetch={refetch}
                setRefetch={setRefetch}
                />)
            }
        </div>

     }

        </div>
    );
};

export default MyGallery;