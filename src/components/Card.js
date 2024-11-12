import React from 'react';
import UrgentPriority from '../assests/UrgentPrioritygrey.svg'
import HighPriority from '../assests/HighPriority.svg'
import MediumPriority from '../assests/MediumPriority.svg'
import LowPriority from '../assests/LowPriority.svg'
import NoPriority from '../assests/No-priority.svg'
import StatusImage from './StatusImage'


const priorityImages = {
  4: UrgentPriority,
  3: HighPriority,
  2: MediumPriority,
  1: LowPriority,
  0: NoPriority,
};
function PriorityImage({ priority }) {
  return <img src={priorityImages[priority]} alt={`Priority ${priority}`} className="priority-image" />;
}

function Card({ ticket }) {
  return (
    <div className="card">
      <div className="ticket-id">{ticket.id}</div>
      <div className="cad">
        <div className="cad1">
      <StatusImage status={ticket.status} />
        </div>
      <h3>{ticket.title}</h3>

      </div>
      
      {/* <p>Status: {ticket.status}</p> */}
      {/* <p>Priority: {['No Priority', 'Low', 'Medium', 'High', 'Urgent'][ticket.priority]}</p> */}
      <div className="cardbottom">
        <div className="icon">
      <p> <PriorityImage priority={ticket.priority} /></p>

        </div>
      <span className="tag"> {ticket.tag}</span>

      </div>
    </div>
  );
}

export default Card;
