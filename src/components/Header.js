import React from 'react';
import displayOptions from '../assests/Display.svg'
import down from '../assests/down.svg'

function Header({ grouping, setGrouping, sortOrder, setSortOrder }) {
  return (
    <div className="header">
            <div className="dropdown">
              <div className="but">
              <button className="dropbtn"><div className="img"><img src={displayOptions} alt="404" /> Display <div className="img"><img src={down} alt="404" /></div></div></button>
              </div>
        
        <div className="dropdown-content">
      <label>
          <div className="GrpSrt">
        Grouping:

         <div className="cnt">
         <select onChange={(e) => setGrouping(e.target.value)} value={grouping}>
          <option value="status">Status</option>
          <option value="user">User</option>
          <option value="priority">Priority</option>
        </select>
         </div>
        
        </div>
      </label>
        <label>
        <div className="GrpSrt">
        Sorting:
        <div className="cnt">
        <select onChange={(e) => setSortOrder(e.target.value)} value={sortOrder}>
          <option value="priority">Priority</option>
          <option value="title">Title</option>
        </select>
        </div>
     
        </div>
      </label>
    
      </div>
      </div>
      </div>

  );
}

export default Header;
