import React from "react";
import PaintingCards from "./PaintingCards";


function Homepage(){
  return(
    <div>
      <h1>Ages of Art</h1>
      <PaintingCards/>
      <h4>Hints</h4>
      <button>Artist</button><button>Period</button><button>Region</button>
      
    </div>
  )
}

export default Homepage