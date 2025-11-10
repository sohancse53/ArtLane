import React from "react";
import { FaThumbsUp } from "react-icons/fa";
import useAxios from "../hooks/useAxios";
import Swal from "sweetalert2";

const MyGalleryCard = ({ art, setRefetch, refetch }) => {
  const axiosInstance = useAxios();

  const handleDelete = () => {
    // console.log("click");
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosInstance.delete(`/artworks/${art?._id}`).then((data) => {
          console.log(data.data);
          Swal.fire({
            title: "Deleted!",
            text: "Your have deleted successful.",
            icon: "success",
          });
          setRefetch(!refetch);
        });
      }
    });
  };

  const handleUpdate = () => {
    console.log("click");
  };
  

  return (
    <div className="p-5 space-y-2 shadow border border-red-100">
      <img
        className="h-56 w-full object-cover "
        src={art?.imageUrl}
        alt={art?.title}
      />
      <h2 className="text-2xl font-semibold">{art?.title}</h2>
      <p className="text-slate-600">Category: {art?.category}</p>
      <p>Dimension: {art?.dimensions}</p>
      <p> Des: {art?.description}</p>
      <p>Price: ${art?.price}</p>
      <p className="btn btn-xs">
        <FaThumbsUp className="text-xl" />
        {art?.likes}
      </p>
      <div className="flex gap-5 items-center ">
        <button onClick={handleUpdate} className="btn btn-secondary">
          Update
        </button>
        <button onClick={handleDelete} className="btn btn-primary">
          Remove Art
        </button>
      </div>
    </div>
  );
};

export default MyGalleryCard;
