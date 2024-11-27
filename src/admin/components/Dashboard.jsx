import React from 'react';
import "../index.css";
import { MdSpaceDashboard } from 'react-icons/md';
import DashboardCTitle from '../common/DashboardCTitle';

const Dashboard = () => {
  return (
    <div className='dashboard_main_section_container'
    data-aos="zoom-in"
    data-aos-duration="300"
    data-aos-once="true"
    >

      <DashboardCTitle title={"Dashboard"} icon={ MdSpaceDashboard} />
     
    </div> 
  );
};

export default Dashboard