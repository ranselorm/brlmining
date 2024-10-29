// src/components/Hero.tsx
import React from "react";
import Button from "./Button";

interface HeroProps {
  background: string;
  title: string;
  description?: string;
  button?: boolean;
}

const Hero: React.FC<HeroProps> = ({
  background,
  title,
  description,
  button,
}) => {
  return (
    <section className="relative w-full h-[400px] md:h-[400px] overflow-hidden font-primary">
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
      <div className="absolute inset-0 flex  items-center justify-start px-8 lg:px-24 text-left text-white">
        <div className="w-full md:max-w-3xl">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold uppercase leading-tight font-primary">
            {title}
          </h1>
          {description && (
            <p className="text-lg mb-12 font-semibold">
              {"slides[currentIndex].description"}
            </p>
          )}
          {button && (
            <div className="space-x-4 flex items-center">
              <Button text="Get to know us" />
              <Button
                text="Coporate presentation"
                icon="material-symbols-light:download-sharp"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
