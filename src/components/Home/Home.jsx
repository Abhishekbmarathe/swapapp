import React, { useState } from "react";
import { Link } from "react-router-dom";
import EmployeeDashboard from "./EmpDash";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const Home = () => {
  const [selectedOption, setSelectedOption] = useState("dashboard");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [date, setDate] = useState(new Date());
  const [swapRequests, setSwapRequests] = useState([
    { id: 1, name: "John Doe", date: "2024-04-10" },
    { id: 2, name: "Jane Smith", date: "2024-04-12" },
  ]);

  const handleAccept = (id) => {
    alert(`Swap request ${id} accepted`);
  };

  const handleReject = (id) => {
    alert(`Swap request ${id} rejected`);
  };

  const renderContent = () => {
    switch (selectedOption) {
      case "upcoming":
        return (
          <div className="p-6">
            <h2 className="text-xl font-bold mb-4">Upcoming Weak-Offs</h2>
            <Calendar onChange={setDate} value={date} className="rounded-lg p-2 shadow-lg text-black" />
            <h2 className="text-xl font-bold mt-6">Available Swap Requests</h2>
            <ul className="mt-4">
              {swapRequests.map((request) => (
                <li key={request.id} className="bg-gray-800 p-4 rounded-lg flex justify-between items-center mb-2">
                  <span>{request.name} - {request.date}</span>
                  <div>
                    <button className="bg-green-500 px-3 py-1 rounded text-white mr-2 hover:bg-green-600" onClick={() => handleAccept(request.id)}>Accept</button>
                    <button className="bg-red-500 px-3 py-1 rounded text-white hover:bg-red-600" onClick={() => handleReject(request.id)}>Reject</button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        );
      case "post":
        return <div className="p-6">Post Request Component</div>;
      case "dashboard":
      default:
        return <EmployeeDashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex">
      {/* Sidebar with Mobile Responsiveness */}
      <div className={`fixed inset-y-0 left-0 w-64 bg-gray-800 p-6 min-h-screen transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} transition-transform md:relative md:translate-x-0 md:w-64`}>
        <h2 className="text-xl font-bold mb-6">Menu</h2>
        <ul>
          <li className={`p-3 cursor-pointer ${selectedOption === "dashboard" ? "bg-blue-500" : "hover:bg-gray-700"}`} onClick={() => { setSelectedOption("dashboard"); setIsSidebarOpen(false); }}>Employee Dashboard</li>
          <li className={`p-3 cursor-pointer ${selectedOption === "upcoming" ? "bg-blue-500" : "hover:bg-gray-700"}`} onClick={() => { setSelectedOption("upcoming"); setIsSidebarOpen(false); }}>Upcoming Swaps</li>
          <li className={`p-3 cursor-pointer ${selectedOption === "post" ? "bg-blue-500" : "hover:bg-gray-700"}`} onClick={() => { setSelectedOption("post"); setIsSidebarOpen(false); }}>Post Request</li>
        </ul>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 p-6/">
        {/* Navbar */}
        <nav className="bg-gray-800 p-4 flex justify-between items-center shadow-lg">
          <button className="text-white md:hidden" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            ☰
          </button>
          <h1 className="text-2xl font-bold">Swap Portal</h1>
          <div className="space-x-4">
            <Link to="/" className="bg-blue-500 px-4 py-2 rounded text-white hover:bg-blue-600 transition">Logout</Link>
            <Link to="/forgot-password" className="bg-gray-700 px-4 py-2 rounded text-white hover:bg-gray-600 transition">Change Password</Link>
          </div>
        </nav>
        
        {/* Dynamic Content */}
        {renderContent()}
      </div>
    </div>
  );
};

export default Home;