"use client"
import React, {useEffect, useState} from 'react'

const table = () => {
    const [isMobile, setIsMobile] = useState(false);

    const calculateCPL = (fbBudget, fbAdLeads, nonFbAdLeads) => {
      return (fbBudget / (fbAdLeads + nonFbAdLeads)).toFixed(2); // Calculate CPL in AUD
    };
  
    // Calculate Churn
    const calculateChurn = (pausedMembers, averageMembers) => {
      return ((pausedMembers / averageMembers) * 100).toFixed(2); // Churn as a percentage
    };
  
    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 768); // Adjust 768 based on your mobile breakpoint
      };
  
      handleResize(); // Check screen size on component mount
      window.addEventListener("resize", handleResize); // Re-check on window resize
  
      return () => {
        window.removeEventListener("resize", handleResize); // Cleanup on unmount
      };
    }, []);
  return (
    <div>
              {/* Desktop Table */}
      {!isMobile && (
        <div className="">
          <table className="min-w-full table-auto">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 text-left">Name</th>
                <th className="px-4 py-2 text-left">Status</th>
                <th className="px-4 py-2 text-left">CPL (AUD)</th>
                <th className="px-4 py-2 text-left">Churn (%)</th>
                <th className="px-4 py-2 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {studios.map((studio) => (
                <tr key={studio.id} className="border-t">
                  <td className="px-4 py-2">{studio.name}</td>
                  <td className="px-4 py-2">{studio.status}</td>
                  <td className="px-4 py-2">
                    {calculateCPL(
                      studio.fb_budget,
                      studio.fb_ad_leads,
                      studio.non_fb_ad_leads
                    )}{" "}
                    AUD
                  </td>
                  <td className="px-4 py-2">
                    {calculateChurn(studio.paused_members, studio.average_members)} %
                  </td>
                  <td className="px-4 py-2">
                    {studio.deleted_at ? (
                      <span className="text-gray-500">Deleted</span>
                    ) : (
                      <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700">
                        Delete
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Mobile Table */}
      {isMobile && (
        <div className="w-full overflow-x-auto md:hidden">
          <table className="min-w-full table-auto border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 text-left border-b">Name</th>
                <th className="px-4 py-2 text-left border-b">Status</th>
                <th className="px-4 py-2 text-left border-b">CPL (AUD)</th>
                <th className="px-4 py-2 text-left border-b">Churn (%)</th>
                <th className="px-4 py-2 text-left border-b">Action</th>
              </tr>
            </thead>
            <tbody>
              {studios.map((studio) => (
                <tr key={studio.id}>
                  <th className="px-4 py-2 text-left border-b bg-gray-50">Name</th>
                  <td className="px-4 py-2 text-left border-b">{studio.name}</td>
                  <td className="px-4 py-2 text-left border-b">{studio.status}</td>
                </tr>
              ))}
              {studios.map((studio) => (
                <tr key={studio.id}>
                  <th className="px-4 py-2 text-left border-b bg-gray-50">CPL (AUD)</th>
                  <td className="px-4 py-2 text-left border-b">
                    {calculateCPL(studio.fb_budget, studio.fb_ad_leads, studio.non_fb_ad_leads)} AUD
                  </td>
                </tr>
              ))}
              {studios.map((studio) => (
                <tr key={studio.id}>
                  <th className="px-4 py-2 text-left border-b bg-gray-50">Churn (%)</th>
                  <td className="px-4 py-2 text-left border-b">
                    {calculateChurn(studio.paused_members, studio.average_members)} %
                  </td>
                </tr>
              ))}
              {studios.map((studio) => (
                <tr key={studio.id}>
                  <th className="px-4 py-2 text-left border-b bg-gray-50">Action</th>
                  <td className="px-4 py-2 text-left border-b">
                    {studio.deleted_at ? (
                      <span className="text-gray-500">Deleted</span>
                    ) : (
                      <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700">
                        Delete
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

export default table