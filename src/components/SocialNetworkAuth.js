import React from "react";
import "../css/socialNetworkButton.css";

function SocialNetworkAuth({ className, onClick }) {
  return (
    <button className="btn btn-block github-button" onClick={onClick}>
      <i className={className}></i>
    </button>
  );
}

export default SocialNetworkAuth;
