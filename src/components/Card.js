import React from 'react';

function Card({ ticket }) {
  return (
    <div className="card">
      <h3>{ticket.title}</h3>
      <p>Status: {ticket.status}</p>
      <p>Priority: {['No Priority', 'Low', 'Medium', 'High', 'Urgent'][ticket.priority]}</p>
    </div>
  );
}

export default Card;
