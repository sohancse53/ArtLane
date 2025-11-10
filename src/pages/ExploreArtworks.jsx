import React, { use, useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";

import ArtCard from "../components/ArtCard";
import Authcontext from "../context/Authcontext";

const ExploreArtworks = () => {
    const {user} = use(Authcontext);
  const axiosInstance = useAxios();
  const [arts, setArts] = useState([]);
  const [loading,setLoading]=useState(false);

  useEffect(() => {
    axiosInstance.get(`/artworks-public`).then((data) => {
      console.log(data.data);
      setArts(data.data);
    });
  }, [axiosInstance]);

  const handleSearch = (e)=>{
    e.preventDefault();
    const searchText = e.target.search.value;
    console.log(searchText);
    setLoading(true);
    axiosInstance.get(`/search-By-title?title=${searchText}`)
    .then(data=>{
        setArts(data.data);
          setLoading(false);
    })
   
  
  }
  return (
    <div>
      <title>Explore Artworks</title>
      
      <h2 className="text-3xl text-center my-5 font-bold">Explore Artworks</h2>

      <form onSubmit={handleSearch} className="join  w-full flex justify-center items-center my-5">
        <input name="search" className="input join-item" placeholder="Search" />
        <button type="submit" className="btn btn-secondary join-item rounded-r-full">{loading?'Searching.....':'Search'}</button>
      </form>

      <div className="grid grid-cols-1 md:grid-cols-2  gap-4">
        {arts.map((art) => (
          <ArtCard art={art} key={art?._id} />
        ))}
      </div>
    </div>
  );
};

export default ExploreArtworks;
