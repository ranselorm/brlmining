// src/components/News.tsx
import React from "react";
import NewsCard from "./NewsCard";
import Button from "./Button";

const newsData = [
  {
    category: "Financial",
    date: "September 16, 2024",
    title: "BRL Mining Announces Terms for a Non-Brokered Private Placement",
    iconUrl: "streamline:coins-stack",
  },
  {
    category: "Corporate",
    date: "September 3, 2024",
    title: "BRL Mining Retains Altitude Capital",
    iconUrl: "ph:building-office",
  },
  {
    category: "Corporate",
    date: "August 19, 2024",
    title: "BRL Mining Revises Miminiska & Keezhik Option Agreement",
    iconUrl: "ph:building-office",
  },
];

const News: React.FC = () => {
  return (
    <section className="py-8 w-full  font-primary">
      <div className="container mx-auto px-4 sm:px-4 md:px-20">
        <h2 className="text-xl md:text-2xl font-bold mb-6">Latest News</h2>
        <div className="flex gap-6 flex-col md:flex-row">
          {newsData.map((newsItem, index) => (
            <NewsCard
              key={index}
              category={newsItem.category}
              date={newsItem.date}
              title={newsItem.title}
              iconUrl={newsItem.iconUrl}
            />
          ))}
        </div>
        <Button text="View All Newsroom Posts" path="/newsroom" />
      </div>
    </section>
  );
};

export default News;
