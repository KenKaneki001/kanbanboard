import React from 'react';
import Card from './Card';
import threedots from '../assests/3 dot menu.svg'
import addw from '../assests/add.svg'
// import StatusImage from './StatusImage'

function Column({ title, tickets }) {
  return (
    <div className="column">
      <h2>{title} 
        <div className="plusdot">
        <img src={addw} alt="" />
        <img src={threedots} alt="" />
        </div>
        </h2>
      
      {tickets.map((ticket) => (
        <Card key={ticket.id} ticket={ticket} />
      ))}
    </div>
  );
}

export default Column;
