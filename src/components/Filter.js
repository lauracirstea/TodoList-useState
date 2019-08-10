import React from "react";
import { Link } from "react-router-dom";

function Filter({ setActiveFilter }) {
  let All = "All";
  let Done = "Done";
  let Todo = "Todo";

  return (
    <div>
      <Link className="link" onClick={e => { setActiveFilter(All) }}to="/ "> {All} </Link> 
       
      <Link className="link" onClick={e => setActiveFilter(Done)} to="/done"> {Done} </Link> 
    
      <Link className="link" onClick={e => setActiveFilter(Todo)} to="/todo"> {Todo} </Link>
    </div>
  );
}
export default Filter;
