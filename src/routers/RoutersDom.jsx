import React from "react";
import Login from "../authentication/Login";
import { Route, Routes } from "react-router-dom";
import ContactSupport from "../authentication/ContactSupport";
import DashboardPanel from "../admin/components/Dashboard";
import Dashboard from "../pages/dashboard/index";
import ProtectedRoute from "./ProtectedRoute";
import Logout from "./../authentication/Logout";
import Live from "../admin/components/Live";
import Devices from "./../admin/components/Devices";
import Reports from "../admin/components/Reports";
import Users from "../admin/components/Users";
import Mail from "../admin/components/Mail";
import CompanySelect from "./../admin/components/userRoutesCompany/CompanySelect";
import CreateSupervisorEmp from "../admin/components/userRoutesCompany/CreateSupervisorEmp";
import AllUsers from "../users/index";
import DigitalMeter from "../users/body/components/DigitalMeter";
import AllOperators from "../users/body/components/AllOperators";
import ChangePassword from "../users/body/components/ChangePassword";
import Graphs from "../users/body/components/Graphs";
import AllUserDashBoard from "../users/body/components/Dashboard";
import Favorite from "../users/body/components/Favorite";
import SingleUserDashBoard from "../users/body/components/SingleUserDashBoard";
import ViewGraph from "../users/body/components/ViewGraph";
import EditGraph from "../users/body/components/EditGraph";

const RoutersDom = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/contactSupport" element={<ContactSupport />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route
            index
            path="/dashboard/dashboard"
            element={<DashboardPanel />}
          />

          <Route path="/dashboard/live" element={<Live />} />
          <Route path="/dashboard/devices" element={<Devices />} />
          <Route path="/dashboard/reports" element={<Reports />} />
          <Route path="/dashboard/users" element={<Users />}>
            <Route path="/dashboard/users" element={<CompanySelect />} />
            <Route
              path="/dashboard/users/supervisoremployee/:companyId"
              element={<CreateSupervisorEmp />}
            />
          </Route>
          <Route path="/dashboard/inbox" element={<Mail />} />
        </Route>
        {/* users [manager,supervisor,employee] routes starts here  */}
        <Route path="/allusers" element={<AllUsers />}>
          <Route
            index
            path="/allusers/dashboard"
            element={<AllUserDashBoard />}
          />
          <Route path="/allusers/graphs" element={<Graphs />} />
          <Route path="/allusers/users" element={<AllOperators />} />
          <Route path="/allusers/favorites" element={<Favorite />} />
          <Route path="/allusers/digitalmeter" element={<DigitalMeter />} />
          <Route
            path="/allusers/singleuserdashboard/:id"
            element={<SingleUserDashBoard />}
          />
          <Route
            path="/allusers/viewsinglegraph/:topicparams"
            element={<ViewGraph />}
          />
          <Route
            path="/allusers/editsinglegraph/:topicparams"
            element={<EditGraph />}
          />
        </Route>
        {/* users [manager,supervisor,employee] routes ends here  */}
        <Route path="/logout" element={<Logout />} />
      </Route>
    </Routes>
  );
};

export default RoutersDom;
