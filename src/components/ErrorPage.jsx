import React from "react";
import { useNavigate } from "react-router";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div className="relative flex flex-col items-center justify-center h-screen overflow-hidden bg-base-100 text-center">
      {/* Abstract gradient blobs (decorative shapes) */}
      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-primary/30 blur-3xl rounded-full"></div>
      <div className="absolute bottom-[-120px] right-[-100px] w-[400px] h-[400px] bg-secondary/30 blur-3xl rounded-full"></div>

      {/* Content */}
      <div className="relative z-10 px-4">
        <h1 className="text-[8rem] md:text-[12rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent leading-none mb-4 drop-shadow-md">
          404
        </h1>
        <h2 className="text-3xl md:text-4xl font-semibold text-secondary mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-500 dark:text-gray-400 max-w-md mx-auto mb-8 text-2xl">
          Seems like you’ve wandered off the map. The page you’re looking for
          doesn’t exist.
        </p>
        <button
          onClick={() => navigate("/")}
          className="btn btn-primary px-8 text-lg font-medium shadow-md hover:scale-105 transition-transform"
        >
          Go to Home
        </button>
      </div>

      {/* Subtle artistic line element */}
      <div className="absolute bottom-10 left-0 right-0 opacity-10">
        <svg
          viewBox="0 0 1440 320"
          className="w-full"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="currentColor"
            className="text-primary"
            d="M0,64L80,58.7C160,53,320,43,480,69.3C640,96,800,160,960,176C1120,192,1280,160,1360,144L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default ErrorPage;
