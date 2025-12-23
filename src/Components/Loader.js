import React from "react";
import "../styles/Home.css";

const Loader = () => {
  return (
    <div className="loader-wrapper">
      <div className="spinner-border text-info slow-spinner" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Loader;
