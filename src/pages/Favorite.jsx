import React, { use, useEffect, useState } from 'react';
import useAxios from '../hooks/useAxios';
import Authcontext from '../context/Authcontext';
import FavoriteCard from '../components/FavoriteCard';

const Favorite = () => {
    const {user} = use(Authcontext);
    const axiosInstance = useAxios();
    const [favorites,setFavorites]= useState([]);
    const [refetch,setRefetch] = useState(false);
    useEffect(()=>{
        axiosInstance.get(`/favorites?favorite_by=${user?.email}`)
        .then(data=>{
            console.log(data.data);
            setFavorites(data.data);
            
            
        })
    },[user,axiosInstance,refetch]);
    return (
        <div>
            <title>My favorites</title>
            <h2 className='text-3xl text-center my-5 font-bold'>My favorites</h2>
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
        </div>
    );
};

export default Favorite;