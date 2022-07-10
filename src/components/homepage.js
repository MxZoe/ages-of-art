import React from "react";
import Cards from "./cards";
function makeCard(){
  return Cards("New test");
}
function Homepage(){
  return(
    <div>
      <h1>Ages of Art</h1>
      <div>
        <button onClick={makeCard} text="New Art">New Art</button> 
      </div>
      
    </div>
  )
}

export default Homepage