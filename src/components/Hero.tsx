// src/components/Hero.tsx
import React, { useState, useEffect } from "react";

const slides = [
  {
    image: "/images/hero1.jpg",
    title: "Mineral Exploration & Investment",
    description: "in Ghana and West Africa",
    buttonUrl: "/explore",
  },
  {
    image: "/images/hero2.jpg",
    title: "Empowering Local Communities",
    description: "We strive to positively impact local communities.",
    buttonUrl: "/communities",
  },
  {
    image: "/images/hero3.jpg",
    title: "Sustainable Mining Practices",
    description: "Innovating for a greener future in the mining industry.",
    buttonUrl: "/sustainability",
  },
];

const Hero: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically update the image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Handle manual slide change by clicking on indicators
  const handleIndicatorClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Images with Overlay */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
          {/* Overlay */}
        </div>
      ))}

      {/* Hero Content */}
      <div className="absolute inset-0 flex items-center justify-start px-8 lg:px-32 text-left text-white">
        <div className="max-w-lg">
          <h1 className="text-5xl font-bold mb-4">
            {slides[currentIndex].title}
          </h1>
          <p className="text-lg mb-8">{slides[currentIndex].description}</p>
          <a
            href={slides[currentIndex].buttonUrl}
            className="border border-white hover:bg-white hover:text-black text-white font-semibold py-2 px-6 rounded-md transition duration-200"
          >
            Read More
          </a>
        </div>
      </div>

      {/* Bar Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleIndicatorClick(index)}
            className={`h-1 rounded ${
              currentIndex === index ? "bg-white w-8" : "bg-gray-500 w-4"
            } transition-all duration-300`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
