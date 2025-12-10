"use client";

import { useState, useEffect } from "react";
import CampaignTable from "@/components/CampaignTable";
import FilterDropdown from "@/components/FilterDropdown";

interface Campaign {
  id: number;
  name: string;
  status: string;
  clicks: number;
  cost: number;
  impressions: number;
}

export default function Home() {
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [filteredCampaigns, setFilteredCampaigns] = useState<Campaign[]>([]);
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch campaigns from backend
  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        setLoading(true);
        setError(null);

        const backendUrl =
          process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:8000";

        const response = await fetch(`${backendUrl}/campaigns`);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setCampaigns(data);
        setFilteredCampaigns(data);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Failed to fetch campaigns"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchCampaigns();
  }, []);

  // Filter logic
  useEffect(() => {
    if (selectedFilter === "All") {
      setFilteredCampaigns(campaigns);
    } else {
      setFilteredCampaigns(
        campaigns.filter((c) => c.status === selectedFilter)
      );
    }
  }, [selectedFilter, campaigns]);

  // Calculate CTR (Click Through Rate)
  const calculateCTR = (clicks: number, impressions: number) => {
    return impressions > 0 ? ((clicks / impressions) * 100).toFixed(2) : '0.00';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-8 text-center md:text-left">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-3 tracking-tight">
            Campaign Analytics Dashboard
          </h1>
          <p className="text-lg text-gray-600">
            Manage and monitor your marketing campaigns in real-time
          </p>
        </div>

        {/* Filter Dropdown */}
        <FilterDropdown
          selectedFilter={selectedFilter}
          onFilterChange={setSelectedFilter}
        />

        {/* Loading State */}
        {loading && (
          <div className="bg-white shadow-lg rounded-lg p-12 text-center">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
            <p className="mt-4 text-gray-600">Loading campaigns...</p>
          </div>
        )}

        {/* Error State */}
        {error && !loading && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
            <div className="flex items-center">
              <svg
                className="h-6 w-6 text-red-500 mr-3"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <h3 className="text-red-800 font-medium">
                  Error loading campaigns
                </h3>
                <p className="text-red-700 text-sm mt-1">{error}</p>
                <p className="text-red-600 text-xs mt-2">
                  Make sure backend is running at{" "}
                  {process.env.NEXT_PUBLIC_BACKEND_URL ||
                    "http://localhost:8000"}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Table + Summary */}
        {!loading && !error && (
          <>
            <CampaignTable campaigns={filteredCampaigns} />

            {/* Stats Summary */}
            <div className="mt-8 bg-white shadow-xl rounded-2xl p-6 border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  Performance Summary
                </h2>
                <span className="text-sm text-gray-500">
                  {selectedFilter === "All" ? "All Campaigns" : `${selectedFilter} Only`}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-5 rounded-xl border border-blue-200 hover:shadow-lg transition-shadow">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-blue-700">Campaigns</p>
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                  </div>
                  <p className="text-3xl font-extrabold text-blue-900 mt-2">
                    {filteredCampaigns.length}
                  </p>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-green-100 p-5 rounded-xl border border-green-200 hover:shadow-lg transition-shadow">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-green-700">Total Clicks</p>
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                    </svg>
                  </div>
                  <p className="text-3xl font-extrabold text-green-900 mt-2">
                    {filteredCampaigns
                      .reduce((sum, c) => sum + c.clicks, 0)
                      .toLocaleString()}
                  </p>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-5 rounded-xl border border-purple-200 hover:shadow-lg transition-shadow">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-purple-700">Total Cost</p>
                    <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-3xl font-extrabold text-purple-900 mt-2">
                    ₹{filteredCampaigns
                      .reduce((sum, c) => sum + c.cost, 0)
                      .toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}
                  </p>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-5 rounded-xl border border-orange-200 hover:shadow-lg transition-shadow">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-orange-700">Impressions</p>
                    <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <p className="text-3xl font-extrabold text-orange-900 mt-2">
                    {filteredCampaigns
                      .reduce((sum, c) => sum + c.impressions, 0)
                      .toLocaleString()}
                  </p>
                </div>

                <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-5 rounded-xl border border-indigo-200 hover:shadow-lg transition-shadow">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-indigo-700">Avg CTR</p>
                    <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <p className="text-3xl font-extrabold text-indigo-900 mt-2">
                    {(() => {
                      const totalClicks = filteredCampaigns.reduce((sum, c) => sum + c.clicks, 0);
                      const totalImpressions = filteredCampaigns.reduce((sum, c) => sum + c.impressions, 0);
                      return totalImpressions > 0 ? ((totalClicks / totalImpressions) * 100).toFixed(2) : '0.00';
                    })()}%
                  </p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}




