import React from "react";


export default function Menu(props) {
  return (
    <div>
      <input type="checkbox" className="toggler"></input>
      <div className="hamburger"><div></div></div>    
      <div className="menu">
        <div>
          <ul>
            <li className="See All Records" onClick={props.handleChange}>See All Records</li>
            <li className="Add a Record" onClick={props.handleChange}>Add A Record</li>
            <li className="Home" onClick={props.handleChange}>Home</li>
          </ul>
        </div>
      </div>    
    </div>
  );
}

// {/* <div className="select-dropdown">
//         <select value={props.selectedMenu} onChange={props.handleChange}>
//           <option value="See All Records">See all Records</option>
//           <option value="Add a Record">Add a Record</option>
//           <option value="Home">Home</option>
//         </select>
//       </div> */}