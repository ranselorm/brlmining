// src/components/Hero.tsx
import React from "react";

interface HeroProps {
  background: string;
  title: string;
  description?: string;
}

const Hero: React.FC<HeroProps> = ({ background, title, description }) => {
  return (
    <section className="relative w-full h-[400px] md:h-[500px] overflow-hidden font-primary">
      <div
        className={`absolute inset-0 transition-opacity duration-1000 `}
        style={{
          backgroundImage: `url("${background}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        {/* Overlay */}
      </div>

      {/* Hero Content */}
      <div className="absolute inset-0 flex items-center justify-start px-8 lg:px-32 text-left text-white">
        <div className="w-full md:max-w-3xl">
          <h1 className="text-6xl font-bold capitalize leading-tight font-primary">
            {title}
          </h1>
          {description && (
            <p className="text-lg mb-12 font-semibold">
              {"slides[currentIndex].description"}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
