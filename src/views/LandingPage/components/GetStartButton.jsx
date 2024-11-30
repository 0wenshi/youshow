import React from "react";
import { Link } from "react-router-dom";

function GetStartButton() {
  return (
    <Link to="/contact-us">
      <button className="px-8 py-3 bg-orange-400 text-black font-bold text-lg rounded-full border-2 border-orange-500 shadow-md hover:bg-orange-500 hover:border-orange-600 transition duration-300">
      GET START
      </button>
    </Link>
  );
}

export default GetStartButton;
