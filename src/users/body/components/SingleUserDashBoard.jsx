import React, { useEffect, useState } from "react";
import "../../style.css";
import { useParams } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import apiClient from "../../../api/apiClient";
import { toast } from "react-toastify";
import Loader from "../../loader/Loader";
import SmallGraph from "../graphs/smallgraph/SmallGraph";
import { FaRegBookmark } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";

const SingleUserDashBoard = () => {
  const [localLoading, setLocalLoading] = useState(false);
  const [singleUserData, setSingleUserData] = useState({});
  const { id } = useParams();
  const [favoriteList, setFavoriteList] = useState([]);
  const [supervisorId, setSupervisorId] = useState();

  useEffect(() => {
    if (id) {
      fetchSingleUser();
    }
  }, [id]);

  const fetchSingleUser = async () => {
    setLocalLoading(true);
    try {
      const res = await apiClient.get(`/auth/employee/${id}`);
      const data = res?.data?.data;
      setSingleUserData(data);
      setFavoriteList(data?.supervisor?.favorites || []);
      setSupervisorId(data?.supervisor?._id);
    } catch (error) {
      toast.error(error?.response?.data?.error || "Failed to fetch user data");
    } finally {
      setLocalLoading(false);
    }
  };

  const handleAddFavorite = async (topic) => {
    try {
      await apiClient.post(`/auth/${supervisorId}/favorites`, { topic });
      setFavoriteList((prev) => [...prev, topic]);
      toast.success("Tagname to favorites");
    } catch (error) {
      toast.error(
        error?.response?.data?.error || "Failed to add topic to favorites"
      );
    }
  };

  const handleRemoveFavorite = async (topic) => {
    try {
      await apiClient.delete(`/auth/${supervisorId}/favorites`, {
        data: { topic },
      });
      setFavoriteList((prev) => prev.filter((fav) => fav !== topic));
      toast.success("Topic removed from favorites");
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
    <div className="singleuserdashboard_main_container">
      <div>
        {singleUserData?.name} dashboard{" "}
        <span
          className="singleuserdashboard_close_icon"
          onClick={() => {
            window.location.href = "/allusers/users";
          }}
        >
          <IoClose />
        </span>
      </div>
      <div>
        {singleUserData?.topics?.map((item, index) => (
          <div key={index} className="users_small_graphs_secondary_container">
            <div className="users_graphs_view_edit_icon_container">
              {favoriteList?.includes(item) ? (
                <div onClick={() => handleRemoveFavorite(item)}>
                  <FaBookmark />
                </div>
              ) : (
                <div onClick={() => handleAddFavorite(item)}>
                  <FaRegBookmark />
                </div>
              )}
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

export default SingleUserDashBoard;
