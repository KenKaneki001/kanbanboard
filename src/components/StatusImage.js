import React, { useEffect, useState } from 'react';
import toDo from '../assests/To-do.svg'
import done from '../assests/Done.svg'
import backlog from '../assests/Backlog.svg'
import cancel from '../assests/Cancelled.svg'
import progress from '../assests/in-progress.svg'

function StatusImage({ status }) {
  let statusIcon;

  switch (status) {
    case 'Todo':
      statusIcon = toDo;
      break;
    case 'In progress':
      statusIcon = progress;
      break;
      
    case 'Backlog':
      statusIcon = backlog;
      break;

      case 'Cancelled':
      statusIcon = cancel;
      break;

      case 'Done':
      statusIcon = done;
      break;
      
    default:
      statusIcon = null;
  }
  return statusIcon ? <img src={statusIcon} alt={status} className="status-icon" /> : null;
}

export default StatusImage;