import { useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";
import ArtCard from "./ArtCard";


const FeaturedArts = () => {
    const [arts,setArts]= useState([]);
        const axiosInstance = useAxios();
     useEffect(()=>{
         axiosInstance.get('/featured-artworks')
         .then(data=>{
             console.log(data.data);
             setArts(data.data);
         })
     },[axiosInstance])
    return (
        <div>
            <h1 className='text-center text-3xl font-bold my-5'>Featured Artworks</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    arts.map(art=><ArtCard key={art._id} art={art}/>)
                }
            </div>
        </div>
    );
};

export default FeaturedArts;