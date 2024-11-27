import React, { useEffect, useState } from "react";
import "../../style.css";
import { useParams } from "react-router-dom";
import SmallGraph from "../graphs/smallgraph/SmallGraph";
import { IoClose } from "react-icons/io5";

const ViewGraph = () => {
  const { topicparams } = useParams();

  return (
    <div
      className="_viewgraph_main_container"
      data-aos="fade-out"
      data-aos-duration="1000"
      data-aos-once="true"
    >
      <header>
        <div>{topicparams?.split("/")[2]}</div>
        <div
          onClick={() => {
            window.history.back();
          }}
        >
          <IoClose />
        </div>
      </header>
      <div>
        <SmallGraph topic={topicparams} height={"600"} viewgraph={true} />
      </div>
    </div>
  );
};

export default ViewGraph;
