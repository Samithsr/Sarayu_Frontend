import React, { useState } from 'react';
import "../index.css";
import { MdSpaceDashboard } from 'react-icons/md';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'; // Plus and Minus icons
import DashboardCTitle from '../common/DashboardCTitle';

const Dashboard = () => {
  // State for input fields
  const [companyName, setCompanyName] = useState('');
  const [deviceName, setDeviceName] = useState('');
  const [tagName, setTagName] = useState('');

  // State for submitted data
  const [submittedData, setSubmittedData] = useState(null);

  // State for the count value
  const [count, setCount] = useState(0); // Initial count is 0

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'companyName') setCompanyName(value);
    if (name === 'deviceName') setDeviceName(value);
    if (name === 'tagName') setTagName(value);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Store the submitted data in state
    setSubmittedData({ companyName, deviceName, tagName });

    // Clear the input fields after submit (optional)
    setCompanyName('');
    setDeviceName('');
    setTagName('');
  };

  // Handle Increment
  const handleIncrement = () => {
    setCount(count + 1); // Increase the count by 1
  };

  // Handle Decrement
  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1); // Decrease the count by 1 but avoid negative values
    }
  };

  return (
    <div className='dashboard_main_section_container'
      data-aos="zoom-in"
      data-aos-duration="300"
      data-aos-once="true"
    >
      <DashboardCTitle title={"Dashboard"} icon={MdSpaceDashboard} />

      <div className="employee_topic_creation_header">
        <div className="employee_topic_creation_heading">Topic Creation</div>

        {/* Form for creating a topic */}
        <form onSubmit={handleSubmit}>
          <div className="input_employee_topic_creation">
            <input
              className="input company-name-input"
              type="text"
              placeholder="Enter Company name"
              name="companyName"
              value={companyName}
              onChange={handleInputChange}
            />
            <input
              className="input device-name-input"
              type="text"
              placeholder="Enter device name"
              name="deviceName"
              value={deviceName}
              onChange={handleInputChange}
            />
            <input
              className="input tag-name-input"
              type="text"
              placeholder="Enter tag name"
              name="tagName"
              value={tagName}
              onChange={handleInputChange}
            />
          </div>

          {/* Button group */}
          <div className="button_group">
            <button type="button" className="btn increase-btn" onClick={handleIncrement}>
              <AiOutlinePlus />
            </button>
            <button type="button" className="btn decrease-btn" onClick={handleDecrement}>
              <AiOutlineMinus />
            </button>
          </div>

          {/* Submit button */}
          <div className="submit_section">
            <button className="btn submit-btn" type="submit">Submit</button>
          </div>
        </form>

        {/* Display Submitted Data */}
        {submittedData && (
          <div className="submitted-data">
            <h3>Submitted Data:</h3>
            <p><strong>Company Name:</strong> {submittedData.companyName}</p>
            <p><strong>Device Name:</strong> {submittedData.deviceName}</p>
            <p><strong>Tag Name:</strong> {submittedData.tagName}</p>
          </div>
        )}

        {/* Display Count */}
        <div className="count-display">
          <h3>Current Count: {count}</h3>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;




























// import React from 'react';
// import "../index.css";
// import { MdSpaceDashboard } from 'react-icons/md';
// import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'; // Plus and Minus icons
// import DashboardCTitle from '../common/DashboardCTitle';

// const Dashboard = () => {
//   return (
//     <div className='dashboard_main_section_container'
//     data-aos="zoom-in"
//     data-aos-duration="300"
//     data-aos-once="true"
//     >
//       <DashboardCTitle title={"Dashboard"} icon={MdSpaceDashboard} />

//       <div className="employee_topic_creation_header">
//         <div className="employee_topic_creation_heading">Topic Creation</div>
//         <div className="input_employee_topic_creation">
//             <input className="input company-name-input" type="text" placeholder="Enter Company name" />
//             <input className="input device-name-input" type="text" placeholder="Enter device name" />
//             <input className="input tag-name-input" type="text" placeholder="Enter tag name" />
//         </div>
//         <div className="button_group">
//           <button className="btn increase-btn"><AiOutlinePlus /></button>
//           <button className="btn decrease-btn"><AiOutlineMinus /></button>
//           <div className='submit_button'>
//             <button className="btn submit-btn">Submit</button> {/* Submit button with text */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
