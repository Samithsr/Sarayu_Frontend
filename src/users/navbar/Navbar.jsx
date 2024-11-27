import React, { useEffect, useState } from "react";
import "./Navbar.css";
import "../style.css";
import { handleWarningModel } from "../../redux/slices/UserSlice";
import { useDispatch, useSelector } from "react-redux";
import { IoSearch } from "react-icons/io5";
import { FaUserCheck } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { IoIosLogOut } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { handlToggleMenu } from "../../redux/slices/NavbarSlice";
import apiClient from "../../api/apiClient";
import { toast } from "react-toastify";
import { PiBuildingOfficeBold } from "react-icons/pi";
import ChangePassword from "./../body/components/ChangePassword";

const Navbar = () => {
  const { user } = useSelector((state) => state.userSlice);
  const dispatch = useDispatch();
  const { showMenu } = useSelector((state) => state.NavBarSlice);

  const oldActive = localStorage.getItem(`active`);
  const [active, setActive] = useState(JSON.parse(oldActive) || "dashboard");
  const [loggedInUser, setLoggedInUser] = useState({});
  const [localLoading, setLocalLoading] = useState(false);
  const [changePasswordModel, setChangePasswordModel] = useState(false);

  useEffect(() => {
    localStorage.setItem(`active`, JSON.stringify(active));
    return () => {
      localStorage.removeItem(`active`);
    };
  }, [active]);

  useEffect(() => {
    if (user.id) {
      fetchUserDetails();
    }
  }, [user.id]);

  const fetchUserDetails = async () => {
    setLocalLoading(true);
    try {
      const res = await apiClient.get(`/auth/${user.role}/${user.id}`);
      setLoggedInUser(res?.data?.data);
      setLocalLoading(false);
    } catch (error) {
      toast.error(error?.response?.data?.error);
      setLocalLoading(false);
    }
  };

  return (
    <>
      <div className="users_navbar_container">
        <div className="users_navbar_user_details">
          <p>
            <PiBuildingOfficeBold /> {loggedInUser?.company?.name}
          </p>
        </div>
        <div>
          <p
            onClick={() => {
              window.location.href = "/allusers/dashboard";
              setActive("dashboard");
            }}
            className={`users_navbar_link ${
              active === "dashboard" && "alluser_active_navbar"
            }`}
          >
            Dashboard
          </p>
          <div className="users_navbar_link_separator"></div>
          <p
            onClick={() => {
              window.location.href = "/allusers/graphs";
              setActive("graph");
            }}
            className={`users_navbar_link ${
              active === "graph" && "alluser_active_navbar"
            }`}
          >
            Graphs
          </p>
          <div className="users_navbar_link_separator"></div>
          {user.role !== "employee" && (
            <p
              onClick={() => {
                window.location.href = "/allusers/favorites";
                setActive("favorites");
              }}
              className={`users_navbar_link ${
                active === "favorites" && "alluser_active_navbar"
              }`}
            >
              Favorites
            </p>
          )}
          <div className="users_navbar_link_separator"></div>
          <p
            onClick={() => {
              window.location.href = "/allusers/digitalmeter";
              setActive("digitalmeter");
            }}
            className={`users_navbar_link ${
              active === "digitalmeter" && "alluser_active_navbar"
            }`}
          >
            Digital meter
          </p>
          {user.role === "supervisor" && (
            <>
              <div className="users_navbar_link_separator"></div>
              <p
                onClick={() => {
                  window.location.href = "/allusers/users";
                  setActive("alloperators");
                }}
                className={`users_navbar_link ${
                  active === "alloperators" && "alluser_active_navbar"
                }`}
              >
                Users
              </p>{" "}
            </>
          )}
          <div className="users_navbar_link_separator"></div>
          <p
            onClick={() => setChangePasswordModel(true)}
            className={`users_navbar_link ${
              active === "changepassword" && "alluser_active_navbar"
            }`}
          >
            Change password
          </p>
          <div className="users_navbar_link_separator"></div>
          <p
            className="users_navbar_link"
            onClick={() => dispatch(handleWarningModel())}
          >
            Logout
          </p>
        </div>

        <div className="users_navbar_user_details">
          <p>
            <FaUserCheck /> {user.name}
          </p>
        </div>
      </div>
      <div className="users_mobile_navbar_container">
        <div className="users_mobile_navbar_left">
          <PiBuildingOfficeBold /> {loggedInUser?.company?.name}
        </div>
        <div
          className="users_mobile_navbar_right"
          onClick={() => dispatch(handlToggleMenu())}
        >
          {showMenu ? <IoClose /> : <IoMdMenu />}
        </div>
        {showMenu && (
          <div
            className="users_mobile_navbar_show_menu"
            data-aos="fade-up"
            data-aos-duration="300"
            data-aos-once="true"
          >
            <p
              onClick={() => {
                window.location.href = "/allusers/dashboard";
                setActive("dashboard");
              }}
              className={`users_navbar_link ${
                active === "dashboard" && "alluser_active_navbar"
              }`}
            >
              Dashbaord
            </p>
            <p
              onClick={() => {
                window.location.href = "/allusers/graphs";
                setActive("graph");
              }}
              className={`users_navbar_link ${
                active === "graph" && "alluser_active_navbar"
              }`}
            >
              Graphs
            </p>
            {user?.role !== "employee" && (
              <p
                onClick={() => {
                  window.location.href = "/allusers/favorites";
                  setActive("favorites");
                }}
                className={`users_navbar_link ${
                  active === "favorites" && "alluser_active_navbar"
                }`}
              >
                Favorites
              </p>
            )}
            <p
              onClick={() => {
                window.location.href = "/allusers/digitalmeter";
                setActive("digitalmeter");
              }}
              className={`users_navbar_link ${
                active === "digitalmeter" && "alluser_active_navbar"
              }`}
            >
              Digital meter
            </p>
            {user?.role !== "employee" && (
              <p
                onClick={() => {
                  window.location.href = "/allusers/users";
                  setActive("alloperators");
                }}
                className={`users_navbar_link ${
                  active === "alloperators" && "alluser_active_navbar"
                }`}
              >
                Users
              </p>
            )}
            <p
              onClick={() => setChangePasswordModel(true)}
              className={`users_navbar_link ${
                active === "changepassword" && "alluser_active_navbar"
              }`}
            >
              Change password
            </p>
            <div
              className="users_mobile_navbar_show_menu_logout_container"
              onClick={() => dispatch(handleWarningModel())}
            >
              <button>
                <IoIosLogOut /> Logout
              </button>
            </div>
          </div>
        )}
      </div>
      {changePasswordModel && (
        <ChangePassword
          user={user}
          setChangePasswordModel={setChangePasswordModel}
        />
      )}
    </>
  );
};

export default Navbar;
