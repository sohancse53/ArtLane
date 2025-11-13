import React from "react";
import FeaturedArts from "../components/FeaturedArts";
import Hero from "../components/Hero";
import TopArtist from "../components/TopArtist";
import CommunityHighlights from "../components/CommunityHighlights";

const Home = () => {
  
  return (
    <div className="space-y-20 my-20">
      <title>Home</title>
      <Hero/>
      <FeaturedArts />
      <TopArtist/>
      <CommunityHighlights/>
    </div>
  );
};

export default Home;
