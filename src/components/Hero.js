import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const titleRef = useRef(null);
  const boxRef = useRef(null);
  const textRef = useRef(null);
  const heroRef = useRef(null);

  useEffect(() => {
    // Initial entrance animations
    gsap.fromTo(titleRef.current, 
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out", rotation: 360, scale: 1.5 }
    );

    gsap.fromTo(boxRef.current,
      { scale: 0, rotation: 45 },
      { scale: 1, rotation: 0, duration: 1, delay: 0.5, ease: "back.out(1.7)" }
    );

    // ScrollTrigger animations
    gsap.to(titleRef.current, {
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
        pin: false,
      },
      y: -100,
      scale: 0.8,
      rotation: 180,
      ease: "none"
    });

    gsap.to(boxRef.current, {
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top center",
        end: "bottom top",
        scrub: 2,
      },
      rotation: 360,
      scale: 3,
      y: -50,
      ease: "none"
    });

    gsap.to(textRef.current, {
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top center",
        end: "bottom top",
        scrub: 1,
      },
      opacity: 0.3,
      y: 50,
      ease: "none"
    });

    // Parallax background effect
    gsap.to(heroRef.current, {
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
      backgroundPosition: "50% 100%",
      ease: "none"
    });

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div 
      ref={heroRef}
      className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center relative overflow-hidden"
      style={{ backgroundAttachment: 'fixed' }}
    >
      <div className="text-center relative z-10">
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
        <p 
          ref={textRef}
          className="text-xl text-white/90 max-w-md mx-auto"
        >
          Your development environment is ready! 
          <br />
          <span className="text-yellow-300">Tailwind CSS 3</span> for styling and 
          <span className="text-green-300"> GSAP</span> for animations.
        </p>
      </div>
    </div>
  );
};

export default Hero; 