import React from 'react';
import Lottie from 'lottie-react';
import loadingLottie from '../assets/loadingLottio.json'

const Loading = () => {
  return (
    <div>
      <div className="text-center lg:text-left w-96">
        <Lottie animationData={loadingLottie}></Lottie>
      </div>
    </div>
  );
};

export default Loading;