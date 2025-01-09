import React, { useEffect } from "react";

const FallingStars = () => {
  useEffect(() => {
    const createStar = () => {
      const star = document.createElement("div");
      star.className = "star";

      // Randomize initial position and delay
      const randomLeft = Math.random() * window.innerWidth;
      const randomDelay = Math.random() * 5;
      star.style.left = `${randomLeft}px`;
      star.style.animationDelay = `${randomDelay}s`;

      document.querySelector(".stars-container").appendChild(star);

      // Remove the star after animation
      star.addEventListener("animationend", () => {
        star.remove();
      });
    };

    // Create stars periodically
    const interval = setInterval(createStar, 300);
    return () => clearInterval(interval);
  }, []);

  return <div className="stars-container"></div>;
};

export default FallingStars;
