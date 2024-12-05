"use client";

import React, { useEffect, useState } from "react";

const StudioPage = ({ studios }) => {
  const [isMobile, setIsMobile] = useState(false);

  const calculateCPL = (fbBudget, fbAdLeads, nonFbAdLeads) => {
    if (fbAdLeads + nonFbAdLeads === 0) return 'N/A'; // Prevent division by zero
    return (fbBudget / (fbAdLeads + nonFbAdLeads)).toFixed(2); // Calculate CPL in AUD
  };

  const calculateChurn = (pausedMembers, averageMembers) => {
    if (averageMembers === 0) return 'N/A'; // Prevent division by zero
    return ((pausedMembers / averageMembers) * 100).toFixed(2); // Churn as a percentage
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Adjust based on your mobile breakpoint
    };

    handleResize(); // Check screen size on component mount
    window.addEventListener("resize", handleResize); // Re-check on window resize

    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup on unmount
    };
  }, []);
  
  //create header objects



  return (
    <div className="bg-gray-50 p-4 min-h-screen">
      {/* Mobile Table */}
      {!isMobile ? (
        <div className="overflow-x-auto">
          <table className="table-auto w-full bg-white shadow-md rounded-lg">
            <thead className="bg-blue-500 text-white">
              <tr>
                <th className="px-4 py-2 text-left">Studio Name</th>
                <th className="px-4 py-2 text-left">CPL</th>
                <th className="px-4 py-2 text-left">Churn Rate</th>
              </tr>
            </thead>
            <tbody>
              {studios && studios.length > 0 ? (
                studios.map((studio) => (
                  <tr key={studio.id} className="hover:bg-gray-100 border-b">
                    <td className="px-4 py-2">{studio.campaign_type}</td>
                    <td className="px-4 py-2">{calculateCPL(studio.fb_budget, studio.fb_ad_lead, studio.non_fb_ad_lead)}</td>
                    <td className="px-4 py-2">{calculateChurn(studio.paused_members, studio.average_members)}%</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3" className="px-4 py-2 text-center text-gray-500">No studio data available</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      ) : (
        <div>mobile view
        <table className="table-auto w-full bg-white shadow-md rounded-lg">
            {/* <thead className="bg-blue-500 text-white">
              <tr>
                <th className="px-4 py-2 text-left">Studio Name</th>
                <th className="px-4 py-2 text-left">CPL</th>
                <th className="px-4 py-2 text-left">Churn Rate</th>
              </tr>
            </thead> */}
            <tbody>
              {studios && studios.length > 0 ? (
                studios.map((studio) => (
                  <tr key={studio.id} className="hover:bg-gray-100 border-b">
                    <td className="px-4 py-2">Name</td>
                    <td className="px-4 py-2">{studio.campaign_type}</td>
                  </tr>

                ))
              ) : (
                <tr>
                  <td colSpan="3" className="px-4 py-2 text-center text-gray-500">No studio data available</td>
                </tr>
              )}
            </tbody>
          </table>
          </div>
      )}
    </div>
  );
};

export default StudioPage;
