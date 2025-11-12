import React, { use, useEffect, useState } from "react";
import { useParams } from "react-router";
import useAxios from "../hooks/useAxios";
import { FaHeart, FaThumbsUp } from "react-icons/fa";
import toast from "react-hot-toast";
import { GiLoveHowl } from "react-icons/gi";
import { FaClover } from "react-icons/fa6";
import Authcontext from "../context/Authcontext";
import useAxiosSecure from "../hooks/useAxiosSecure";
import LoadingSpinner from "../components/LoadingSpinner";

const ArtDetails = () => {
  const [loading, setLoading] = useState(false);
  const [myArts, setMyArts] = useState([]);
  const { user } = use(Authcontext);
  const [art, setArt] = useState(null);
  const [refetch, setRefetch] = useState(false);
  const { id } = useParams();
  const axiosInstance = useAxios();
  // const instanceSecure = useAxiosSecure()
  // console.log(id);

  // fetch art by id
  useEffect(() => {
    setLoading(true);
    axiosInstance.get(`artworks/${id}`).then((data) => {
      // console.log(data.data);
      setArt(data.data);
      setLoading(false);
    });
  }, [id, axiosInstance, refetch]);

  // increase like onclick
  const handleLike = () => {
    axiosInstance.put(`artworks/${id}`).then((data) => {
      console.log(data.data);
      if (data.data.modifiedCount) {
        toast("Liked");
        setRefetch(!refetch);
      }
    });
  };

  const newArt = {
    art: art?._id,
    imageUrl: art?.imageUrl,
    title: art?.title,
    category: art?.category,
    userName: art?.userName,
    description: art?.description,
    totalArtworks: art?.totalArtworks,
    favorite_by: user?.email,
  };
  // post to my favorite
  const handleFavorite = () => {
    axiosInstance
      .post(`/favorites`, newArt)
      .then((data) => {
        // console.log(data.data);
        if (data.data.insertedId) {
          toast.success("Art added to my favorite section");
        }
      })
      .catch((error) => {
        toast.error("you have already added it to my favorites");
      });
  };


  //get all art of a person by email
  useEffect(() => {
    axiosInstance.get(`/artworks?email=${art?.userEmail}`).then((data) => {
      // console.log(data.data);
      setMyArts(data.data);
    });
  }, [art, axiosInstance]);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-base-100 shadow-xl rounded-2xl">
        <title>{art?.title} Details</title>
       
      {/* Artwork Image */}
      <div className="w-full h-80 overflow-hidden rounded-xl mb-6">
        <img
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          src={art?.imageUrl}
          alt={art?.title}
        />
      </div>

      {/* Title */}
      <h1 className="text-4xl font-extrabold mb-4 text-primary">
        {art?.title}
      </h1>

      {/* Artist Info */}
      <div className="flex items-center gap-4 mb-6">
        <img
          src={art?.artist_photo}
          alt={art?.userName}
          className="w-16 h-16 rounded-full border-2 border-primary object-cover"
        />
        <div>
          <p className="text-lg font-semibold">Artist</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {art?.userName}
          </p>
        </div>
      </div>

      {/* Description */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Description</h2>
        <p className="text-gray-600 wrap-break-word">{art?.description}</p>
      </div>

      {/* Stats */}
      <div className="flex flex-wrap items-center gap-4 mb-6">
        <p className="badge badge-outline">Total Artworks: {myArts.length}</p>
        <p className="badge badge-dash">Total Likes: {art?.likes}</p>
      </div>

      {/* Actions */}
      <div className="flex flex-wrap gap-4">
        {/* Add to Favorite */}
        <button
          onClick={handleFavorite}
          className="btn flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-full shadow hover:bg-red-600 transition-colors duration-300"
        >
          <FaHeart className="text-lg" />
          <span className="font-semibold">Favorite</span>
        </button>

        {/* Like Button */}
        <button
          onClick={handleLike}
          className="btn flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-full shadow hover:bg-blue-600 transition-colors duration-300"
        >
          <FaThumbsUp className="text-lg" />
          <span className="font-semibold">Like</span>
        </button>

      </div>
    </div>
  );
};

export default ArtDetails;
