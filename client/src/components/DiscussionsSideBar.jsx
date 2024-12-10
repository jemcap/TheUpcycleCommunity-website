import React, { useState } from "react";

const DiscussionsSideBar = () => {
  const [search, setSearch] = useState("");

  const discussionCategories = [
    { id: 1, name: "General Discussions" },
    { id: 2, name: "Tips & Tricks" },
    { id: 3, name: "Q&A" },
    { id: 4, name: "Feature Requests" },
    { id: 5, name: "Bug Reports" },
  ];

  const filteredCategories = discussionCategories.filter((category) =>
    category.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <aside className="w-full md:w-1/3 p-4">
      {/* Search Bar */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search discussions..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Categories */}
      <div>
        <h2 className="text-lg font-semibold text-gray-800 mb-3">
          Discussion Categories
        </h2>
        <ul className="space-y-2">
          {filteredCategories.map((category) => (
            <li key={category.id}>
              <button className="w-full text-left px-4 py-2 text-gray-700 bg-white rounded-md shadow hover:bg-gray-200 transition-all">
                {category.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default DiscussionsSideBar;
