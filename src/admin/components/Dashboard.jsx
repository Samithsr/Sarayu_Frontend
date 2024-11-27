import React from "react";
import "../index.css";
import { MdSpaceDashboard } from "react-icons/md";
import DashboardCTitle from "../common/DashboardCTitle";
import { FiAlignJustify } from "react-icons/fi";
import { IoIosNotifications } from "react-icons/io";
import { CgMailOpen } from "react-icons/cg";

const Dashboard = () => {
  return (
    <div
      className="dashboard_main_section_container"
      data-aos="zoom-in"
      data-aos-duration="300"
      data-aos-once="true"
    >
       <div className="dashboard_main_section_container_icons">
        <span className="icon"><FiAlignJustify /></span>
        <span className="icon"><IoIosNotifications /></span>
        <span className="icon"><CgMailOpen /></span>
        <img src="https://via.placeholder.com/30" alt="User" className="avatar" />
      </div>
      <DashboardCTitle title={"Dashboard"} icon={<MdSpaceDashboard />} />
    </div> 
  );
};

export default Dashboard;