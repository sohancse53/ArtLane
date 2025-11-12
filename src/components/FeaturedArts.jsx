import { useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";
import ArtCard from "./ArtCard";
import LoadingSpinner from "./LoadingSpinner";


const FeaturedArts = () => {
    const [loading,setLoading] = useState(false);
    const [arts,setArts]= useState([]);
        const axiosInstance = useAxios();
        
     useEffect(()=>{
        setLoading(true)
         axiosInstance.get('/featured-artworks')
         .then(data=>{
            //  console.log(data.data);
             setArts(data.data);
             setLoading(false);
         })
     },[axiosInstance])

     if(loading){return <LoadingSpinner/>}

     
    return (
        <div>
            <h1 className='text-center text-3xl font-semibold my-5 text-primary'>Featured Artworks</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    arts.map(art=><ArtCard key={art._id} art={art}/>)
                }
            </div>
        </div>
    );
};

export default FeaturedArts;