import React, { useEffect, useState } from 'react';
import Header from './Header';
import Board from './Board';
import { fetchData } from '../services/api';

function App() {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [grouping, setGrouping] = useState('status'); // default group by status
  const [sortOrder, setSortOrder] = useState('priority');

  useEffect(() => {
    async function loadData() {
      const { tickets, users } = await fetchData();
      setTickets(tickets);
      setUsers(users);
    }
    loadData();
  }, []);

  return (
    <div className="App">
      <Header grouping={grouping} setGrouping={setGrouping} sortOrder={sortOrder} setSortOrder={setSortOrder} />
      <Board tickets={tickets} users={users} grouping={grouping} sortOrder={sortOrder} />
    </div>
  );
}

export default App;
