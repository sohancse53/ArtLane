import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import { Link } from "react-router";
import { Typewriter } from "react-simple-typewriter";

const images = [{ original: img1 }, { original: img2 }, { original: img3 }];
const title = [
  "Explore stunning  art.",
  "Paintings, sculptures, and digital works.",
  "Exhibitions and creative workshops.",
  "Connect with artists at ArtLane."
];
const Hero = () => {
  return (
    <div className="relative max-h-96 overflow-hidden bg-neutral">
      {/* Image Slider */}
      <ImageGallery
        items={images}
        autoPlay={true}
        showThumbnails={false}
        showFullscreenButton={false}
        showPlayButton={false}
        showNav={false}
        slideDuration={800}
        additionalClass="smooth-slide"
        slideInterval={4000}
        infinite={true}
        
      />

      {/* Overlay Text */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4 bg-black/40">
        <h1 className="text-3xl sm:text-5xl font-bold mb-2 p-5">
          <Typewriter 
          words={title}
          cursor={true}
          cursorBlinking={true}
          loop={0}
          cursorColor="red"
          typeSpeed={100}
          deleteSpeed={100}
          
          />
        </h1>
        <p className="text-sm sm:text-lg">
          Discover amazing artworks from talented artists
        </p>
        <Link
          to={"/explore-artworks"}
          className="mt-4 px-6 py-2 btn btn-outline hover:btn-primary text-white font-semibold rounded-lg transition"
        >
          Explore Now
        </Link>
      </div>
    </div>
  );
};

export default Hero;
