import React, { useEffect, useState } from 'react';
import useAxios from '../hooks/useAxios';

import ArtCard from '../components/ArtCard';

const ExploreArtworks = () => {
    const axiosInstance = useAxios();
    const [arts,setArts] = useState([]);
    useEffect(()=>{
            axiosInstance.get(`/artworks-public`)
            .then(data=>{
                console.log(data.data);
                setArts(data.data);
                
                
            })
        },[axiosInstance]);
    return (
        <div>
              <h2 className='text-3xl text-center my-5 font-bold'>My favorites</h2>
                 <div className="grid grid-cols-1 md:grid-cols-2  gap-4">
                {
                    arts.map(art=><ArtCard 
                            art={art}
                            key={art?._id}
                        />)
                }
            </div>
              

        </div>
    );
};

export default ExploreArtworks;