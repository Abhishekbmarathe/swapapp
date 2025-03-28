import React, { useState, useEffect } from "react";

const EmployeeDashboard = () => {
  const [weakOffs, setWeakOffs] = useState([]);
  const [swapRequests, setSwapRequests] = useState([]);
  const [preferredDate, setPreferredDate] = useState("");

  useEffect(() => {
    // Fetch upcoming weak-offs and swap requests from API (dummy example)
    setWeakOffs(["March 30", "April 6", "April 13"]);
    setSwapRequests([
      { name: "John Doe", date: "March 30" },
      { name: "Jane Smith", date: "April 6" },
    ]);
  }, []);

  const handlePostRequest = () => {
    if (preferredDate) {
      alert(`Swap request posted for ${preferredDate}`);
      setPreferredDate("");
    }
  };

  return (
    <div className="p-6 bg-gray-900 min-h-screen text-white">
      <h1 className="text-3xl font-bold mb-4">Employee Dashboard</h1>

      {/* Upcoming Weak-Offs */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold">Upcoming Weak-Offs</h2>
        <ul className="mt-2">
          {weakOffs.map((date, index) => (
            <li key={index} className="bg-gray-800 p-3 my-2 rounded">{date}</li>
          ))}
        </ul>
      </div>

      {/* Available Swap Requests */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold">Available Swap Requests</h2>
        <ul className="mt-2">
          {swapRequests.length > 0 ? (
            swapRequests.map((request, index) => (
              <li key={index} className="bg-blue-800 p-3 my-2 rounded">
                {request.name} wants to swap on {request.date}
              </li>
            ))
          ) : (
            <p>No swap requests available</p>
          )}
        </ul>
      </div>

      {/* Post a Swap Request */}
      <div>
        <h2 className="text-xl font-semibold">Post a Swap Request</h2>
        <input
          type="date"
          value={preferredDate}
          onChange={(e) => setPreferredDate(e.target.value)}
          className="w-full p-2 my-2 bg-gray-700 border border-gray-600 rounded"
        />
        <button
          onClick={handlePostRequest}
          className="bg-green-500 px-4 py-2 rounded hover:bg-green-600"
        >
          Post Request
        </button>
      </div>
    </div>
  );
};

export default EmployeeDashboard;
