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
  const isHovering = useRef(false);


  useEffect(() => {
    // Set initial position for the box
    gsap.set(boxRef.current, { x: 0, y: 0, rotation: 0 });

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
      scale: 1.5,
      ease: "none"
    });

    // Create ScrollTrigger animation with proper timing
    const boxScrollTrigger = ScrollTrigger.create({
      trigger: heroRef.current,
      start: "top top",
      end: "bottom top",
      scrub: 2,
      animation: gsap.fromTo(boxRef.current, 
        {
          x: 0,
          rotation: 0,
          y: 0,
          scale: 1
        },
        {
          x: 700,
          rotation: 360,
          y: 500,
          scale: 1,
          ease: "none"
        }
      )
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

    // Add hover effect for the box
    const handleMouseEnter = () => {
      isHovering.current = true;
      
      gsap.to(boxRef.current, {
        scale: 2,
        duration: 0.3,
        ease: "power2.out",
        overwrite: "auto" // This will override conflicting properties
      });
    };

    const handleMouseLeave = () => {
      isHovering.current = false;
      
      gsap.to(boxRef.current, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
        overwrite: "auto",
        onComplete: () => {
          // Re-enable scroll animation after hover ends
          boxScrollTrigger.enable();
        }
      });
    };

    // Add event listeners
    boxRef.current.addEventListener('mouseenter', handleMouseEnter);
    boxRef.current.addEventListener('mouseleave', handleMouseLeave);

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
      boxRef.current?.removeEventListener('mouseenter', handleMouseEnter);
      boxRef.current?.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div 
      ref={heroRef}
      className="min-h-screen bg-gradient-to-br from-black to-blue-900 flex items-center justify-center relative overflow-hidden"
      style={{ backgroundAttachment: 'fixed' }}
    >
      <div className="text-center relative z-10">
        <h1 
          ref={titleRef}
          className="text-6xl font-bold text-white mb-8 drop-shadow-lg"
        >
          Helloo folks👋
        </h1>
        <div 
          ref={boxRef}
          className="w-32 h-32 bg-gradient-to-br from-orange-800 to-red-900 rounded-full shadow-2xl drop-shadow-lg shadow-black mx-auto mb-8 flex items-center justify-center cursor-pointer"
        >
        </div>
        <p 
          ref={textRef}
          className="text-xl text-white/90 max-w-md mx-auto"
        >
          <span className="text-yellow-300">Scroll down to see what's below👀</span>
          
        </p>
      </div>
    </div>
  );
};

export default Hero; 