import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Section = () => {
  const titleRef = useRef(null);
  const boxRef = useRef(null);

  useEffect(() => {
    // GSAP animation example
    gsap.fromTo(titleRef.current, 
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );

    gsap.fromTo(boxRef.current,
      { scale: 0, rotation: 45 },
      { scale: 1, rotation: 0, duration: 1, delay: 0.5, ease: "back.out(1.7)" }
    );
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
      <div className="text-center">
        <h1 
          ref={titleRef}
          className="text-6xl font-bold text-white mb-8 drop-shadow-lg"
        >
          React + Tailwind + GSAP
        </h1>
        <div 
          ref={boxRef}
          className="w-32 h-32 bg-white rounded-lg shadow-2xl mx-auto mb-8 flex items-center justify-center"
        >
          <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-orange-500 rounded-full"></div>
        </div>
        <p className="text-xl text-white/90 max-w-md mx-auto">
          Your development environment is ready! 
          <br />
          <span className="text-yellow-300">Tailwind CSS 3</span> for styling and 
          <span className="text-green-300"> GSAP</span> for animations.
        </p>
      </div>
    </div>
  );
};

export default Section; 