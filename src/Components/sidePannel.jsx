import React from "react";
import "./sidePannel.css"

export  function SidePanel() {

  const handleMenuClick = () => {
    window.location.href = "/new-page"; // route of menu page
  };

  return (
    <div>
      <div className="side-panel"></div>

      <div className="circle-menu">
        <div className="circle-button" onClick={handleMenuClick}>
          <span>MENU</span>
        </div>
      </div>
    </div>
  );
}
