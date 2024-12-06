"use client";

import React, { useEffect, useState } from "react";

const StudioPage = ({ studios }) => {
  const [studioData, setStudioData] = useState(studios); // Manage studio data
  const [isMobile, setIsMobile] = useState(false); // Detect mobile screen sizes
  const [editingStudio, setEditingStudio] = useState(null); // For editing a studio

  // Calculate CPL (Cost Per Lead)
  const calculateCPL = (fbBudget, fbAdLeads, nonFbAdLeads) => {
    if (fbAdLeads + nonFbAdLeads === 0) return 'N/A'; // Prevent division by zero
    return (fbBudget / (fbAdLeads + nonFbAdLeads)).toFixed(2); // Calculate CPL in AUD
  };

  // Calculate Churn Percentage
  const calculateChurn = (pausedMembers, averageMembers) => {
    if (averageMembers === 0) return 'N/A'; // Prevent division by zero
    return ((pausedMembers / averageMembers) * 100).toFixed(2); // Churn as a percentage
  };

  // Handle Create Studio
  const handleCreateStudio = (newStudio) => {
    setStudioData([...studioData, newStudio]); // Add new studio to the state (for now, we are not persisting this data)
  };

  // Handle Edit Studio
  const handleEditStudio = (studio) => {
    setEditingStudio(studio);
  };

  // Handle Update Studio
  const handleUpdateStudio = (updatedStudio) => {
    const updatedStudios = studioData.map((studio) =>
      studio.id === updatedStudio.id ? updatedStudio : studio
    );
    setStudioData(updatedStudios); // Update the studio data in state
    setEditingStudio(null); // Reset editing
  };

  // Handle Delete Studio (Soft Delete)
  const handleDeleteStudio = (studioId) => {
    const updatedStudios = studioData.map((studio) =>
      studio.id === studioId ? { ...studio, deleted_at: new Date().toISOString() } : studio
    );
    setStudioData(updatedStudios); // Mark as deleted without actually removing the data
  };

  // Detect screen size (mobile vs desktop)
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="bg-gray-50 p-6 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8">Studio Campaigns</h1>

      {/* Display Studio List */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {studioData.map((studio) => (
          <div key={studio.id} className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800">{studio.campaign_type}</h2>
              <p className="text-sm text-gray-500 mt-1">Start: {studio.start_date} | End: {studio.end_date}</p>

              {/* Attendance and Members */}
              <div className="mt-4">
                <p className="text-gray-700">Attendance: <span className="font-semibold">{studio.attendance}</span></p>
                <p className="text-gray-700">Avg. Members: <span className="font-semibold">{studio.average_members}</span></p>
              </div>

              {/* CPL and Churn Calculation */}
              <div className="mt-4">
                <div className="flex justify-between">
                  <div>
                    <p className="font-semibold text-gray-700">CPL (Cost Per Lead)</p>
                    <p className="text-gray-600">{calculateCPL(studio.fb_budget, studio.fb_ad_lead, studio.non_fb_ad_lead)} AUD</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-700">Churn</p>
                    <p className="text-gray-600">{calculateChurn(studio.paused_members, studio.average_members)}%</p>
                  </div>
                </div>
              </div>

              {/* Leads and Budget */}
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold text-gray-700">Total Leads</p>
                  <p className="text-gray-600">{studio.fb_ad_lead + studio.non_fb_ad_lead}</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-700">FB Ad Leads</p>
                  <p className="text-gray-600">{studio.fb_ad_lead}</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-700">Non-FB Ad Leads</p>
                  <p className="text-gray-600">{studio.non_fb_ad_lead}</p>
                </div>
              </div>

              {/* Budget and Other Info */}
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold text-gray-700">Facebook Budget</p>
                  <p className="text-gray-600">{studio.fb_budget}</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-700">Paused Members</p>
                  <p className="text-gray-600">{studio.paused_members}</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-700">Rollover Mem Sold</p>
                  <p className="text-gray-600">{studio.rollover_mem_sold}</p>
                </div>
              </div>

              {/* Status */}
              <div className="mt-4 text-center">
                <span
                  className={`inline-block px-4 py-2 rounded-full ${
                    studio.status === 1 ? "bg-green-500 text-white" : "bg-gray-500 text-white"
                  }`}
                >
                  {studio.status === 1 ? "Active" : "Inactive"}
                </span>
              </div>

              {/* Edit and Delete Actions */}
              <div className="mt-6 flex justify-between">
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
                  onClick={() => handleEditStudio(studio)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
                  onClick={() => handleDeleteStudio(studio.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add/Edit Studio Form */}
      {editingStudio && (
        <div className="mt-10 bg-white p-8 rounded-lg shadow-xl max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Edit Studio</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleUpdateStudio(editingStudio); // Update the studio data
            }}
          >
            <label className="block text-sm font-semibold text-gray-700 mb-2">Campaign Type</label>
            <input
              type="text"
              value={editingStudio.campaign_type}
              onChange={(e) => setEditingStudio({ ...editingStudio, campaign_type: e.target.value })}
              className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:ring-2 focus:ring-blue-500"
            />
            {/* Repeat the above for other fields like fb_budget, start_date, etc. */}
            <button
              type="submit"
              className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition"
            >
              Save Changes
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default StudioPage;
