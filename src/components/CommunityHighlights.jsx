import React, { useEffect, useState } from 'react';
import communityImg from '../assets/community.jpg';

import { Link } from 'react-router';
import { Typewriter } from 'react-simple-typewriter';
import useAxios from '../hooks/useAxios';
import { Fade, Slide } from 'react-awesome-reveal';
const title = [
  "Spotlight",
  "Showcase",
  "Highlights",
  "Inspire",
  "Creators",
  "Gallery",
  "Pulse",
  "Essence",
  "Vibes",
  "Moments",
  "Retroverse",
  "Echoes",
  "Fusion",
  "Frame",
  "Collective",
  "Muse",
  "Aura",
  "Spectrum",
  "Flair",
  "Canvas"
];
const CommunityHighlights = () => {
    return (
       <section className=" text-red-600 py-20  space-y-6">
        <h1 className='text-4xl text-secondary text-center font-semibold'>Community Highlights</h1>
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10">
   
      <Slide>
          <img
          src={communityImg}
          alt=""
          className="w-64 h-64 object-cover rounded-xl border-4 border-red-600 shadow-sm"
        />
      </Slide>

    
        <div className="text-center md:text-left space-y-4">
          <h2 className="text-4xl font-bold tracking-tight">
               <Typewriter 
                     words={title}
                     cursor={true}
                     cursorBlinking={true}
                     loop={0}
                     cursorColor="red"
                     typeSpeed={100}
                     deleteSpeed={100}
                     
                     />
          </h2>
          <Fade>
            <p className="text-gray-600 max-w-md leading-relaxed">
            A glimpse into the creativity of our vibrant retro art community. 
            Each week, we spotlight outstanding artists who redefine nostalgia 
            through modern minimalism.
          </p>
          </Fade>
          <Link to={'/explore-artworks'} className="mt-4 bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition-colors">
            Explore Gallery
          </Link>
        </div>
      </div>
    </section>
    );
};

export default CommunityHighlights;