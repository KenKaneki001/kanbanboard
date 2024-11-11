import React from 'react';
import Column from './Column';

function Board({ tickets, users, grouping, sortOrder }) {
  const groupedTickets = groupTickets(tickets, grouping, users);

  return (
    <div className="board">
      {Object.keys(groupedTickets).map((group) => (
        <Column key={group} title={group} tickets={sortTickets(groupedTickets[group], sortOrder)} />
      ))}
    </div>
  );
}

function groupTickets(tickets, grouping, users) {
  switch (grouping) {
    case 'status':
      return tickets.reduce((acc, ticket) => {
        const group = ticket.status;
        if (!acc[group]) acc[group] = [];
        acc[group].push(ticket);
        return acc;
      }, {});
    case 'user':
      return tickets.reduce((acc, ticket) => {
        const user = users.find((u) => u.id === ticket.userId)?.name || 'Unassigned';
        if (!acc[user]) acc[user] = [];
        acc[user].push(ticket);
        return acc;
      }, {});
    case 'priority':
      return tickets.reduce((acc, ticket) => {
        const priorityLevel = ['No Priority', 'Low', 'Medium', 'High', 'Urgent'][ticket.priority];
        if (!acc[priorityLevel]) acc[priorityLevel] = [];
        acc[priorityLevel].push(ticket);
        return acc;
      }, {});
    default:
      return {};
  }
}

function sortTickets(tickets, sortOrder) {
  return tickets.sort((a, b) => {
    if (sortOrder === 'priority') return b.priority - a.priority;
    if (sortOrder === 'title') return a.title.localeCompare(b.title);
    return 0;
  });
}

export default Board;
