import React from "react";
import blog1 from "../assets/Blog/blog1.webp";
import blog2 from "../assets/Blog/blog2.webp";
import blog3 from "../assets/Blog/blog3.webp";
import blog4 from "../assets/About/blogimg2.webp";
import blog5 from "../assets/About/blogimg1.webp";
import blog6 from "../assets/About/blogimg3.webp";


const articles = [
  {
    category: "news",
    title: "Serenity in a bottle: the essence of self-care",
    image: blog1,
  },
  {
    category: "salon",
    title: "Modern salon experience: a luxe retreat",
    image: blog2,
  },
  {
    category: "salon",
    title: "Freckles and fresh faces: the glow within",
    image: blog3,
  },
  {
    category: "tips",
    title: "Skincare essentials: beauty in simplicity",
    image: blog4,
  },
  {
    category: "news",
    title: "Curls that speak: embrace the bounce",
    image: blog5,
  },
  {
    category: "tips",
    title: "Reviving your natural glow: haircare rituals",
    image: blog6,
  },
];

const ArticleCard = ({ category, title, image }) => (
  <div className="bg-[#f6f0eb] p-4 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105">
    <span className="bg-secondary text-white text-xs px-3 py-2 rounded-full uppercase font-semibold">
      {category}
    </span>
    <h3 className="mt-4 text-lg font-normal ">{title}</h3>
    <img src={image} alt={title} className="mt-4 w-full rounded-md" />
  </div>
);

const ArticlesGrid = () => {
  return (
    <div className="p-[8%] mx-auto">
      <h2 className="text-3xl font-medium mb-4">
        What's <em className="font-Gambetta">new</em> with Hair & Bone
      </h2>
      <div className="flex gap-4 text-gray-600 text-sm mb-6">
        <span className="font-semibold">All articles</span>
        <span>tips</span>
        <span>salon</span>
        <span>news</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {articles.map((article, index) => (
          <ArticleCard key={index} {...article} />
        ))}
      </div>
    </div>
  );
};

export default ArticlesGrid;
