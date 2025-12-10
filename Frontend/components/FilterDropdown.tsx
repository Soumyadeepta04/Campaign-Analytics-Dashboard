"use client";

interface FilterDropdownProps {
  selectedFilter: string;
  onFilterChange: (filter: string) => void;
}

export default function FilterDropdown({ selectedFilter, onFilterChange }: FilterDropdownProps) {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between bg-white dark:bg-card rounded-xl shadow-lg p-4 border border-gray-200 dark:border-gray-700">
        <div className="flex items-center space-x-3">
          <div className="bg-blue-100 p-2 rounded-lg">
            <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
            </svg>
          </div>
          <div>
            <label htmlFor="status-filter" className="block text-sm font-bold text-gray-900 dark:text-gray-100">
              Filter Campaigns
            </label>
            <p className="text-xs text-gray-500 dark:text-gray-400">Select status to filter</p>
          </div>
        </div>

        <select
          id="status-filter"
          value={selectedFilter}
          onChange={(e) => onFilterChange(e.target.value)}
          className="
            px-4 py-2.5 text-sm font-medium cursor-pointer
            border-2 border-gray-200 dark:border-gray-700
            rounded-lg shadow-sm bg-white dark:bg-card
            text-gray-900 dark:text-gray-100
            focus:outline-none focus:ring-2 focus:ring-blue-500
          "
        >
          <option className="bg-white text-gray-900 dark:bg-card dark:text-gray-100" value="All">
            📊 All Campaigns
          </option>
          <option className="bg-white text-gray-900 dark:bg-card dark:text-gray-100" value="Active">
            ✅ Active Only
          </option>
          <option className="bg-white text-gray-900 dark:bg-card dark:text-gray-100" value="Paused">
            ⏸️ Paused Only
          </option>
        </select>
      </div>
    </div>
  );
}
