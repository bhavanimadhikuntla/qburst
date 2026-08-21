import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Industries from "./pages/Industries";
import "./App.css";
import Careers from "./pages/Careers";
import JobDetails from "./pages/JobDetails";
import ApplyJob from "./pages/ApplyJob";
import Contact from "./pages/Contact";
import Solutions from "./pages/Solutions";
import CaseStudies from "./pages/CaseStudies";
import Applications from "./pages/Applications";
import MyApplications from "./pages/MyApplications";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Jobs from "./pages/Jobs";
import Navbar from "./components/Navbar";
import AdminDashboard from "./pages/AdminDashboard";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";
function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services/>}/>
        <Route path="/industries" element={<Industries/>}/>
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/jobs" element={<Careers/>}/>      
        <Route path="/jobs/:id" element={<JobDetails />} />
        <Route path="/jobs/:id/apply" element={<ApplyJob />}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/applications" element={<Applications />} />
        <Route path="/my-applications"element={<MyApplications />}/>
        <Route path="/register" element={<Register />} />
<Route path="/login" element={<Login />} />
<Route path="/dashboard" element={<Dashboard/>}/>
<Route
  path="/admin/dashboard"
  element={<AdminDashboard />}
/>
      <Route path="/jobs" element={<Jobs />} />
    <Route path="/profile" element={<Profile />} />
<Route
  path="/edit-profile"
  element={<EditProfile />}
/>
     </Routes>
     
    </BrowserRouter>
  );
}

export default App;