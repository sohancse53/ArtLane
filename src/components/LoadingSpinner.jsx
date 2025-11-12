import React from 'react';
import { CircleLoader } from 'react-spinners';

const LoadingSpinner = () => {
    return (
        <div className='w-full h-96 flex justify-center items-center'>
            <CircleLoader color="#ff7a00" />
        </div>
    );
};

export default LoadingSpinner;