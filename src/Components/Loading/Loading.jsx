import React from "react";
import "./Loading.css"; // Add a separate CSS file for styling

const Loading = () => {
  return (
    <div className="loading-container">
      <div className="spinner"></div>
      <span className="loading-text">QuickSell</span>
    </div>
  );
};

export default Loading;
