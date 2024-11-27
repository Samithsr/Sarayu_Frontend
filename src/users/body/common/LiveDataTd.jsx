import React, { useEffect, useState } from "react";
import "../../style.css";
import apiClient from "../../../api/apiClient";

const LiveDataTd = ({ topic }) => {
  const [liveMessage, setLiveMessages] = useState();
  let encodedTopic = encodeURIComponent(topic);
  const [subscribed, setSubscribed] = useState(false);
  const [localLoading, setLocalLoading] = useState(false);
  useEffect(() => {
    fetchSubscriptionApi();
  }, [topic]);

  useEffect(() => {
    if (!subscribed) return;
    const interval = setInterval(fetchLiveData, 1000);
    return () => clearInterval(interval);
  }, [subscribed]);

  const fetchSubscriptionApi = async () => {
    setLocalLoading(true);
    try {
      const res = await apiClient.get(
        `/mqtt/is-subscribed?topic=${encodedTopic}`
      );
      setSubscribed(res?.data?.isSubscribed);
      setLocalLoading(false);
    } catch (error) {
      console.error("Error fetching subscription status:", error.message);
      setLocalLoading(false);
    }
  };

  const fetchLiveData = async () => {
    try {
      const res = await apiClient.post("/mqtt/messages", { topic });
      setLiveMessages(res?.data?.message?.message);
    } catch (error) {
      console.log(error?.message);
    }
  };

  return <td>{liveMessage ? liveMessage : "-"}</td>;
};

export default LiveDataTd;
