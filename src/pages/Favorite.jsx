import React, { use, useEffect, useState } from 'react';
import useAxios from '../hooks/useAxios';
import Authcontext from '../context/Authcontext';
import FavoriteCard from '../components/FavoriteCard';
import LoadingSpinner from '../components/LoadingSpinner';

const Favorite = () => {
    const [loading,setLoading]= useState(false);
    const {user} = use(Authcontext);

    const axiosInstance = useAxios();
    
    const [favorites,setFavorites]= useState([]);
    const [refetch,setRefetch] = useState(false);
    useEffect(()=>{
        setLoading(true);
        axiosInstance.get(`/favorites?favorite_by=${user?.email}`)
        .then(data=>{
            // console.log(data.data);
            setFavorites(data.data);
            setLoading(false)
            
        })
    },[user,axiosInstance,refetch]);
    return (
        <div className='space-y-5'>
            <title>My favorites</title>
            <div className="mt-5">
       <h2 className="text-3xl text-center  font-bold text-primary">My Favorites</h2>
      <p className="text-center text-gray-600">Total found- <span className="text-primary font-bold">{favorites.length}</span> Arts</p>
     </div>
           {
            loading?
            <LoadingSpinner/>
            :
             <div className="grid grid-cols-1 md:grid-cols-2  gap-4">
                {
                    favorites.map(favorite=><FavoriteCard 
                        key={favorite._id}
                        favorite={favorite}
                        refetch={refetch}
                        setRefetch = {setRefetch}
                        />)
                }
            </div>
           }
        </div>
    );
};

export default Favorite;