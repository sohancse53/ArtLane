import React, { use } from "react";
import Authcontext from "../context/Authcontext";
import useAxios from "../hooks/useAxios";
import toast from "react-hot-toast";

const AddArtwork = () => {
    const axiosInstance = useAxios();
  const { user } = use(Authcontext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newArt = {
      imageUrl: e.target.imageUrl.value,
      title: e.target.title.value,
      category: e.target.category.value,
      mediumTools: e.target.mediumTools.value,
      description: e.target.description.value,
      dimensions: e.target.dimensions.value,
      price: e.target.price.value,
      visibility: e.target.visibility.value,
      userName: e.target.userName.value,
      userEmail: e.target.email.value,
      time: new Date(),
      totalArtworks: 0,
      likes: 0,
    };
    console.log({ newArt });
    axiosInstance.post('/artworks',newArt)
    .then(data=>{
        console.log(data.data);
        if(data.data.insertedId){
            toast.success("New Artwork added successfully");
        }
    })
  };




  return (
    <div className="min-h-screen flex items-center justify-center  p-4">
      <div className="w-full max-w-xl bg-white rounded-xl border border-red-50 p-6 shadow-lg">
        <h1 className="text-3xl font-semibold  mb-4">Add Artwork</h1>

        <form onSubmit={handleSubmit} className="space-y-4 text-sm">
          {/* User info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 ">User Name</label>
              <input
                
                name="userName"
                className="input input-bordered w-full bg-gray-50"
                type="text"
                defaultValue={user?.displayName}
                disabled
              />
            </div>
            <div>
              <label className="block mb-1 ">User Email</label>
              <input
               name="email"
                className="input input-bordered w-full bg-gray-50"
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
              name="title"
              className="input input-bordered w-full"
              type="text"
              placeholder="Title"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block mb-1 ">Category</label>
            <input
              name="category"
              className="input input-bordered w-full"
              type="text"
              placeholder="Enter Category"
            />
          </div>

          {/* Medium / Tools */}
          <div>
            <label className="block mb-1 ">Medium / Tools</label>
            <input
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
              name="description"
              className="textarea textarea-bordered w-full"
              rows={3}
              placeholder="Short description"
            ></textarea>
          </div>

          {/* Dimensions + Price */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 ">Dimensions (optional)</label>
              <input
                name="dimensions"
                className="input input-bordered w-full"
                type="text"
                placeholder="Ex: 30 x 40 cm"
              />
            </div>
            <div>
              <label className="block mb-1 ">Price (optional)</label>
              <input
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
              Add Artwork
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddArtwork;
