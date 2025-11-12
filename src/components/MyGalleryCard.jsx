import React, { use, useRef } from "react";
import { FaArrowAltCircleRight, FaArrowRight, FaThumbsUp } from "react-icons/fa";
import useAxios from "../hooks/useAxios";
import Swal from "sweetalert2";
import Authcontext from "../context/Authcontext";
import toast from "react-hot-toast";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { Link } from "react-router";
import { MdDeleteOutline, MdOutlineSystemUpdateAlt } from "react-icons/md";

const MyGalleryCard = ({ art, setRefetch, refetch }) => {
  const {user}= use(Authcontext);
  const updateRef = useRef();
  const axiosInstance = useAxios();
  // const instanceSecure = useAxiosSecure();
    
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
          // console.log(data.data);
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

  const modal = () => {
    // console.log("click");
    updateRef.current.showModal();
  };

  const handleUpdate = (e)=>{
   e.preventDefault();
    const updatedArt = {
      imageUrl: e.target.imageUrl.value,
      title: e.target.title.value,
      category: e.target.category.value,
      mediumTools: e.target.mediumTools.value,
      description: e.target.description.value,
      dimensions: e.target.dimensions.value,
      price: e.target.price.value,
      visibility: e.target.visibility.value,
      time: new Date(),
      
    };
    // console.log({ updatedArt });
    axiosInstance.put(`/update-artworks/${art?._id}`,updatedArt)
    .then(data=>{
        console.log(data.data);
        if(data.data.modifiedCount){
          updateRef.current.close();
          setRefetch(!refetch);
          toast.success("Your Artwork Been Updated");
        }
    })
    
  }

  return (
    <div className="p-5 space-y-2 shadow border border-red-100">
      
      <img
        className="h-56 w-full object-cover "
        src={art?.imageUrl}
        alt={art?.title}
      />
      <h2 className="text-2xl font-semibold">{art?.title}</h2>
      <p className="text-slate-600 text-xl"><span className="font-bold">Category:</span> {art?.category}</p>
      <div className="flex gap-5">
        <p><span className="font-bold">Dimension:</span> {art?.dimensions}</p>
        <p className="badge badge-dash">Price: ${art?.price}</p>
      </div>
     
      
     
      <div className="flex flex-col md:flex-row gap-5 items-center justify-start mt-7">
      <div className="flex gap-6">
          <button  onClick={modal} className="btn btn-secondary">
          Update <MdOutlineSystemUpdateAlt/>
        </button>
        <button onClick={handleDelete} className="btn btn-primary">
          Remove Art <MdDeleteOutline />
        </button>
      </div>

        <Link to={`/art-details/${art?._id}`} className="btn btn-outline ">View Details <FaArrowRight className="" /></Link>
      </div>


        {/* Open the modal using document.getElementById('ID').showModal() method */}
<dialog ref={updateRef} id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
   <div className="flex justify-between items-center relative mb-6">
     <h3 className="font-bold text-3xl">Update Art!</h3>
      <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn btn-sm absolute top-0 right-0 text-primary">X</button>
      </form>
    </div>
   </div>
    
    {/* update form starts */}
      <form onSubmit={handleUpdate} className="space-y-4 text-sm">
          {/* User info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 ">User Name</label>
              <input
                
                name="userName"
                className="input input-bordered w-full "
                type="text"
                defaultValue={user?.displayName}
                disabled
              />
            </div>
            <div>
              <label className="block mb-1 ">User Email</label>
              <input
               name="email"
                className="input input-bordered w-full "
                type="email"
                defaultValue={user?.email}
                disabled
              />
            </div>
          </div>

          {/* Image URL */}
          <div>
            <label className="block mb-1 ">Image URL</label>
            <input
            defaultValue={art?.imageUrl}
              name="imageUrl"
              className="input input-bordered w-full"
              type="text"
              placeholder="Image URL"
            />
          </div>

          {/* Title */}
          <div>
            <label className="block mb-1 ">Title</label>
            <input 
            defaultValue={art?.title}
              name="title"
              className="input input-bordered w-full"
              type="text"
              placeholder="Title"
            />
          </div>

          {/* Category */}
     <div className="w-full">
           <select defaultValue={art?.category} name="category"  className="w-full select appearance-none">
  
  <option>Digital Art</option>
  <option>Painting And Illustration</option>
  <option>Sculpture And Crafts</option>
  <option>Photography</option>
</select>
     </div>

          {/* Medium / Tools */}
          <div>
            <label className="block mb-1 ">Medium / Tools</label>
            <input
            defaultValue={art?.mediumTools}
              name="mediumTools"
              className="input input-bordered w-full"
              type="text"
              placeholder="Medium or tools used"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block mb-1 ">Description</label>
            <textarea
            defaultValue={art?.description}
              name="description"
              className="textarea textarea-bordered w-full"
              rows={3}
              placeholder="Short description"
            ></textarea>
          </div>

          {/* Dimensions + Price */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 ">Dimensions</label>
              <input
                defaultValue={art?.dimensions}
                name="dimensions"
                className="input input-bordered w-full"
                type="text"
                placeholder="Ex: 30 x 40 cm"
              />
            </div>
            <div>
              <label className="block mb-1 ">Price</label>
              <input
                defaultValue={art?.price}
                name="price"
                className="input input-bordered w-full"
                type="number"
                placeholder="Price"
              />
            </div>
          </div>

          {/* Visibility */}
          <div>
            <label className="block mb-1 ">Visibility</label>
            <div className="flex items-center gap-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                value="Public"
                  type="radio"
                  name="visibility"
                  className="radio radio-sm"
                  defaultChecked
                />
                <span>Public</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                 value="Private"
                  type="radio"
                  name="visibility"
                  className="radio radio-sm"
                />
                <span>Private</span>
              </label>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-3 pt-2">
            <button type="submit" className="btn btn-primary text-white w-full">
              Update Artwork
            </button>
          </div>
        </form>
    {/* update form ends */}
   
  </div>
</dialog>


    </div>
  );
};

export default MyGalleryCard;
