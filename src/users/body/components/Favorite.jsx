import React, { useEffect, useState } from "react";
import "../../style.css";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import apiClient from "../../../api/apiClient";
import { CiBookmarkRemove } from "react-icons/ci";
import SmallGraph from "../graphs/smallgraph/SmallGraph";
import Loader from "../../loader/Loader";
import { FaRegEye } from "react-icons/fa";

const Favorite = () => {
  const { user } = useSelector((state) => state.userSlice);
  const [loggedInUser, setLoggedInUser] = useState({});
  const [localLoading, setLocalLoading] = useState(false);

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
    } catch (error) {
      toast.error(
        error?.response?.data?.error || "Failed to fetch user details"
      );
    } finally {
      setLocalLoading(false);
    }
  };

  const removeFromFavorite = async (topic) => {
    try {
      await apiClient.delete(`/auth/${user.id}/favorites`, {
        data: { topic },
      });

      setLoggedInUser((prev) => ({
        ...prev,
        favorites: prev.favorites.filter((fav) => fav !== topic),
      }));
      // toast.success("Topic removed from favorites");
      window.location.reload();
    } catch (error) {
      toast.error(
        error?.response?.data?.error || "Failed to remove topic from favorites"
      );
    }
  };

  if (localLoading) {
    return <Loader />;
  }

  return (
    <div>
      <div className="users_small_graphs_primary_container">
        {loggedInUser?.favorites?.map((item, index) => (
          <div key={index} className="users_small_graphs_secondary_container">
            <div className="users_graphs_view_edit_icon_container">
              <div onClick={() => removeFromFavorite(item)}>
                <CiBookmarkRemove size={"20"} />
              </div>
              <div
                onClick={() => {
                  const encodePrams = encodeURIComponent(item);
                  window.location.href = `/allusers/viewsinglegraph/${encodePrams}`;
                }}
              >
                <FaRegEye size={"20"} />
              </div>
            </div>
            <div className="users_graphs_topic_name">
              <p>{item?.split("/")[2]}</p>
            </div>
            <SmallGraph topic={item} height={220} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorite;
