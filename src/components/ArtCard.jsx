import React from "react";
import { Fade, Slide } from "react-awesome-reveal";
import { FaDollarSign, FaThumbsUp } from "react-icons/fa";
import { Link } from "react-router";

const ArtCard = ({art}) => {
  return (
  <Slide direction="up" cascade={true} damping={0.1}>
     <Fade duration={1000} >
       <div className=" bg-base-100 shadow transition-all  hover:-translate-y-2">
      <div className="w-full h-52 bg-base-200 flex justify-center items-center">
        <img
          src={art?.imageUrl}
          alt={art?.title}
          className="w-full h-full bg-amber-200 object-cover"
        />
      </div>

      <div className="p-5 flex flex-col  gap-2">
        <h2 className="text-2xl font-semibold wrap-break-word">
          {art?.title}
        </h2>
         <p className="badge badge-secondary  rounded-full p-2  wrap-break-word">{art?.category}</p>

       

        <div className="flex-1 flex gap-2  justify-between my-2 items-center">
          <p className="font-semibold wrap-break-word">
          Artist: <span className="font-light">{art?.userName}</span>
        </p>
        <p className="badge badge-soft badge-lg wrap-break-word">Price:<FaDollarSign/>{art?.price}</p>
          

        </div>

       
          <Link to={`/art-details/${art?._id}`} className="btn btn-outline hover:btn-primary transition-all duration-500 w-full text-sm ">View Details</Link>
        </div>
      </div>
     </Fade>
  </Slide>
   
  );
};

export default ArtCard;
