import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';



const Section = () => {
  const titleRef = useRef(null);
  const boxRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(MotionPathPlugin);
    // GSAP animation example

    gsap.to(boxRef.current, {
        duration: 5,
        rotation: 360,
        repeat: -1, // keeps looping
        ease: "none",
        motionPath: {
            path: "M0,-400 A400,400 0 1,1 0.01,-400", // smooth circle
            align: false,
            autoRotate: false,
          }
        });
  }, []);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="text-center">
        <h1 
          ref={titleRef}
          className="text-6xl font-bold text-white mb-8 drop-shadow-lg"
        >Woaahh Orbit💫 
        </h1>
        <div 
          ref={boxRef}
          className="w-32 h-32 bg-gradient-to-br from-yellow-400 drop-shadow-2xl border-black border-1 shadow-black to-green-600 rounded-full shadow-2xl mx-auto mb-8 flex items-center justify-center"
        >
        </div>
      </div>
    </div>
  );
};

export default Section; 