import React from "react";
import topArtist from "../assets/topArtist.jpg";
const TopArtist = () => {
  return (
<div className="space-y-2">
    <h1 className="text-secondary text-4xl text-center underline">Top Artist</h1>
        <div className="flex flex-col-reverse lg:flex-row justify-between items-center shadow-md p-5">
       
         <div className="p-10 flex-1 space-y-2">
        <h1 className="text-4xl font-bold text-primary"> Artist Of The Week</h1>
        <h2 className="text-2xl font-semibold">John Dee</h2>
        <p className="text-gray-600">John paints beach scenes and landscapes from around the UK.</p>
      </div>

      <div className="bg-gray-400 flex-1 flex justify-center items-center shadow-lg">
        <img className="" src={topArtist} alt="" />
      </div>
     
    </div>
</div>
  );
};

export default TopArtist;
