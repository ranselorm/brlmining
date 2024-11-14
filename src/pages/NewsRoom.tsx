import { useEffect } from "react";
import Hero from "../components/Hero";
import NewsCard from "../components/NewsCard";

const NewsRoom = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section>
      <Hero title="Newsroom" background="/images/news-bg.jpg" />
      <div className="py-8 w-full mx-auto px-4 sm:px-4 md:px-24 font-primary flex gap-4 flex-wrap">
        <NewsCard
          title="BRL Mining Announces Terms for a Non-Brokered Private Placement"
          date="September 16, 2024"
          iconUrl="streamline:coins-stack"
          category="Financial"
        />
        <NewsCard
          title="BRL Mining Announces Terms for a Non-Brokered Private Placement"
          date="September 3, 2024"
          iconUrl="ph:building-office"
          category="Corporate"
        />
        <NewsCard
          title="BRL Mining Revises Miminiska & Keezhik Option Agreement"
          date="August 19, 2024"
          iconUrl="ph:building-office"
          category="Corporate"
        />
        <NewsCard
          title="BRL Mining Announces Terms for a Non-Brokered Private Placement"
          date="September 3, 2024"
          iconUrl="ph:building-office"
          category="Corporate"
        />
        <NewsCard
          title="BRL Mining Announces Terms for a Non-Brokered Private Placement"
          date="September 3, 2024"
          iconUrl="ph:building-office"
          category="Corporate"
        />
        <NewsCard
          title="BRL Mining Announces Terms for a Non-Brokered Private Placement"
          date="September 16, 2024"
          iconUrl="streamline:coins-stack"
          category="Financial"
        />
      </div>
    </section>
  );
};

export default NewsRoom;
