import React from 'react';

const Orders = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar for filters */}
      <aside className="w-1/4 bg-gray-100 p-4">
        <h2 className="text-xl font-semibold mb-4">Filters</h2>
        {/* Add your filter controls here */}
        <div>
          <label className="block mb-2">Status</label>
          <select className="w-full mb-4 p-2 border border-gray-300 rounded">
            <option>All</option>
            <option>Pending</option>
            <option>Completed</option>
            <option>Cancelled</option>
          </select>
        </div>
        <div>
          <label className="block mb-2">Date Range</label>
          <input type="date" className="w-full mb-4 p-2 border border-gray-300 rounded" />
        </div>
        {/* Add more filters as needed */}
      </aside>

      {/* Main content */}
      <main className="flex-1 p-6">
        {/* Search Bar */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search orders..."
            className="w-full p-3 border border-gray-300 rounded"
          />
        </div>

        {/* Orders List */}
        <ul className="space-y-4">
          <li className="p-4 border border-gray-300 rounded bg-white">
            <h3 className="text-lg font-semibold">Order #12345</h3>
            <p>Status: Pending</p>
            <p>Date: 2024-07-05</p>
            {/* Add more order details as needed */}
          </li>
          <li className="p-4 border border-gray-300 rounded bg-white">
            <h3 className="text-lg font-semibold">Order #12346</h3>
            <p>Status: Completed</p>
            <p>Date: 2024-07-04</p>
            {/* Add more order details as needed */}
          </li>
          {/* Add more orders as needed */}
        </ul>
      </main>
    </div>
  );
};

export default Orders;
