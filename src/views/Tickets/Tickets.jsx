import React from "react";
import styles from "./components/styles.module.css";
import SearchBox from "../ActorsIntroduction/components/SearchBox";
import NavBar from "../HomePage/components/NavBar";

function Tickets() {
  return (
    <div className={styles.background}>
      {/* Navigation Bar at the Top */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <NavBar />
      </div>

      {/* Search Box at the Bottom */}
      <div className="fixed bottom-10 right-10">
        <SearchBox />
      </div>
    </div>
  );
}

export default Tickets;