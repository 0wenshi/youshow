import React from "react";
import styles from "./components/styles.module.css";
import SearchBox from "../ActorsIntroduction/components/SearchBox";
import NavBar from "./components/NavBar";
import RotatingSlides from "./components/RotatingSlides";

function HomePage() {
  return (
    <div className={styles.background}>
      {/* Navigation Bar at the Top */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <NavBar />
      </div>

      {/* Content Section */}
      <div className="flex flex-col pt-24">
        {/* RotatingSlides and Description */}
        <div className="flex justify-between items-start mx-auto max-w-6xl w-full">
          {/* Rotating Slides */}
          <div className="w-2/3">
            <RotatingSlides />
          </div>

          {/* Description Section */}
          <div className="w-1/3 pl-8">
            <h2 className="text-4xl font-bold text-orange-500 mb-6">
              Discover Our Performances
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Explore our latest shows and events featuring top performers from
              around the world. Enjoy exclusive experiences, discover new
              talents, and immerse yourself in the magic of live performances!
            </p>
          </div>
        </div>
      </div>

      {/* Search Box at the Bottom */}
      <div className="fixed bottom-10 right-10">
        <SearchBox />
      </div>
    </div>
  );
}

export default HomePage;
