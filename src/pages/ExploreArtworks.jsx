import React, { use, useEffect, useRef, useState } from "react";
import useAxios from "../hooks/useAxios";

import ArtCard from "../components/ArtCard";
import Authcontext from "../context/Authcontext";
import LoadingSpinner from "../components/LoadingSpinner";

const ExploreArtworks = () => {
  const filterRef = useRef();
  const { user } = use(Authcontext);

  const axiosInstance = useAxios();

  const [arts, setArts] = useState([]);
  const [filteredArts,setFilteredArts]= useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    axiosInstance.get(`/artworks-public`).then((data) => {
      console.log(data.data);
      setArts(data.data);
      setFilteredArts(data.data);
      setLoading(false);
    });
  }, [axiosInstance]);

  const handleSearch = (e) => {
    e.preventDefault();
    const searchText = e.target.search.value;
    console.log(searchText);
    setLoading(true);
    axiosInstance.get(`/search-By-title?title=${searchText}`).then((data) => {
      setArts(data.data);
      setLoading(false);
    });
  };

  const handleFilter = ()=>{
    const cat = filterRef.current.value;
    if(cat == "Category: Default"){
      setArts(filteredArts);
      return;
    }
    setLoading(true);
   axiosInstance.get(`filter-by-category?category=${cat}`)
   .then(data=>{
    console.log(data.data);
     setArts(data.data);
     setLoading(false);
   })

  };


  
  return (
    <div className="space-y-10">
      <title>Explore Artworks</title>

     <div className="mt-5">
       <h2 className="text-3xl text-center  font-bold text-primary">Explore Artworks</h2>
      <p className="text-center text-gray-600">Total found- <span className="text-primary font-bold">{arts.length}</span> Arts</p>
     </div>

      <div className="flex flex-col md:flex-row items-center ">
      <form
        onSubmit={handleSearch}
        className="join  flex-1 flex justify-center items-center"
      >
        <input name="search" className="input join-item" placeholder="Search" />
        <button
          type="submit"
          className="btn btn-secondary join-item rounded-r-full"
        >
          {loading ? "Searching....." : "Search"}
        </button>
      </form>

       <select 
          ref={filterRef} 
          onChange={handleFilter}
          name="category"
          defaultValue='Filter category'
          className=" select appearance-none mb-4 md:w-[20%] rounded-full"
        >
          <option defaultValue >Category: Default</option>
          <option>Digital Art</option>
          <option>Painting And Illustration</option>
          <option>Sculpture And Crafts</option>
          <option>Photography</option>
        </select>

      </div>
     
       
      


      {
        loading?
        <LoadingSpinner/>
        :
        <div className="grid grid-cols-1 md:grid-cols-2  gap-4">
        {arts.map((art) => (
          <ArtCard art={art} key={art?._id} />
        ))}
      </div>
      }
    </div>
  );
};

export default ExploreArtworks;
