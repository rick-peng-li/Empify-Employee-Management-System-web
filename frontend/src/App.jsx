import { Toaster } from "react-hot-toast";
import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Layout from "./pages/Layout";
import LoginLanding from "./pages/LoginLanding";
import Employees from "./pages/Employees";
import Payslips from "./pages/Payslips";
import Setting from "./pages/Setting";
import Attendance from "./pages/Attendance";
import Leave from "./pages/Leave";
import PrintPayslip from "./pages/PrintPayslip";
import LoginForm from "./components/LoginForm";

const App = () => {
  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/login" element={<LoginLanding />} />
        <Route
          path="/login/admin"
          element={<LoginForm  role="admin"
          title="Admin Portal"
          subtitle="Sign in to Manage organization"/>}
         
        />
        <Route
          path="/login/employee"
          element={<LoginForm role="employee"
          title="Employee Portal"
          subtitle="Sign in to access your profile" />}
        />
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/payslips" element={<Payslips />} />
          <Route path="/settings" element={<Setting />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/leave" element={<Leave />} />
        </Route>
        <Route path="/print/payslips/:id" element={<PrintPayslip />} />
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </>
  );
};

export default App;
