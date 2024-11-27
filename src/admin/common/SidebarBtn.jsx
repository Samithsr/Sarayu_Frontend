import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./style.css";

const SidebarBtn = ({ path, icon, title }) => {
  // Initialize useNavigate

  // const handleClick = () => {
  //   // Toggle active state on button click
  //   setIsActive(!isActive);

    // Navigate to the specified path
  //   navigate(path);
  // };

  return (
    <button 
      onClick={handleClick} 
      className={`sidebar_btn ${isActive ? 'active' : ''}`}
    >
      <span>
        {icon} {title}
      </span>
      <div className={`sidebar_btn_circle ${isActive ? 'active' : ''}`}></div>
    </button>
  );
};

export default SidebarBtn;



// import React from "react";
// import "./style.css";
// import { NavLink } from "react-router-dom";

// const SidebarBtn = ({ path, icon, title }) => {
//   return (
//     <NavLink to={path} className="sidebar_btn">
//       <span>
//         {icon} {title}
//       </span>
//       <div className="sidebar_btn_circle"></div>
//     </NavLink>
//   );
// };

// export default SidebarBtn;   remove the nav link add button using usestate