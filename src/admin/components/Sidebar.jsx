import React, { useState, } from "react";
import "../index.css";
import { IoLocationSharp } from "react-icons/io5";
import { MdDevices } from "react-icons/md";
import { MdSpaceDashboard } from "react-icons/md";
import { BiSolidReport } from "react-icons/bi";
import { GrLogout } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { MdAdminPanelSettings } from "react-icons/md";
import { FaUsersCog } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { handleWarningModel } from "../../redux/slices/UserSlice";
// import SidebarBtn from "../common/SidebarBtn";
// import logo from "../../assets/logo.png";
import Users from './Users';
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [active, setActive] = useState("dashboard");
  const navigate = useNavigate(); 
  const { user } = useSelector((state) => state.userSlice);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(handleWarningModel());
  };
  return (
    <div
      className="sidebar_container"
      data-aos="fade-right"
      data-aos-duration="1000"
      data-aos-once="true"
    >
      <section>
        <div className="sidebar_title_container">
          <div className="sidebar_title_second_container py-1">
          {/* <img src="vvv"         
            alt="Sarayu Logo"
            className="admin_sidebar_sarayu_logo"
            /> */}
            <h3 className="sidebar_title">Sarayu  Infotech Solution pvt ltd</h3>

            <h6 className="admin_panel_title">
              <MdAdminPanelSettings size={"20"} /> ADMIN PANEL
            </h6>
          </div>
          <div className="sidebar_hr_container">
            <div className="hr_alternative"></div>
          </div>
        </div>
        <div className="sidebar_buttons_container">
                  
           <button 
      onClick={()=> [setActive("dashboard"), navigate("/dashboard/dashboard")]} 
      className={`sidebar_btn ${active===`dashboard`? 'active' : ''}`}
    >
      <span>
      <FaUsersCog />  Dashboard
      </span>
      <div className={`sidebar_btn_circle ${active===`dashboard`? 'active' : ''}`}></div>
    </button>

              
    <button 
      onClick={()=> [setActive("users"), navigate("/dashboard/users")]} 
      className={`sidebar_btn ${active===`users` ? 'active' : ''}`}
    >
      <span>
      <FaUsersCog />  Users
      </span>
      <div className={`sidebar_btn_circle ${active===`users` ? 'active' : ''}`}></div>
    </button>

              
    <button 
      onClick={()=> [setActive("inbox"), navigate("/dashboard/inbox")]} 
      className={`sidebar_btn ${active===`inbox` ? 'active' : ''}`}
    >
      <span>
      <FaUsersCog />  Inbox
      </span>
      <div className={`sidebar_btn_circle ${active===`inbox` ? 'active' : ''}`}></div>
    </button>
          
        </div>
      </section>
      <section>
        <div className="sidebar_lastsection">
          <div class="tooltip-container">
            <span class="tooltip">Logout</span>
            <div class="notification" onClick={handleLogout}>
              <div class="notiglow"></div>
              <div class="notiborderglow"></div>
              <div class="notititle">
                <span>Logout</span>
                <span style={{ transform: "translateY(-2px)" }}>
                  <GrLogout />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sidebar;
