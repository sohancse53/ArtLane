import React from "react";
import FeaturedArts from "../components/FeaturedArts";

const Home = () => {
  return (
    <div>
      <title>Home</title>
      <p>
        {" "}
        Add a Banner/Slider with at least 3 slides highlighting art or trending
        artists.
      </p>

      <FeaturedArts />

      <p>
        Add at least 2 extra sections, e.g., 'Top Artists of the Week' and
        'Community Highlights'.
      </p>
    </div>
  );
};

export default Home;
