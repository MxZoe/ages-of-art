import React from "react";
import Cards from "./cards";

function Homepage(){
  return(
    <div>
      <h1>Ages of Art</h1>
      <Cards/>
      <h4>Hints</h4>
      <button>Artist</button><button>Period</button><button>Region</button>
      
    </div>
  )
}

export default Homepage