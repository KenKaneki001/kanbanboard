import React from 'react';

function Header({ grouping, setGrouping, sortOrder, setSortOrder }) {
  return (
    <div className="header">
      <label>
        Group by:
        <select onChange={(e) => setGrouping(e.target.value)} value={grouping}>
          <option value="status">Status</option>
          <option value="user">User</option>
          <option value="priority">Priority</option>
        </select>
      </label>
      <label>
        Sort by:
        <select onChange={(e) => setSortOrder(e.target.value)} value={sortOrder}>
          <option value="priority">Priority</option>
          <option value="title">Title</option>
        </select>
      </label>
    </div>
  );
}

export default Header;
