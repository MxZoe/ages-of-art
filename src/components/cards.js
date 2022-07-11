import { useDispatch, useSelector } from "react-redux";
import { loadcards } from "../store/cards";
import { useEffect } from "react";

function Cards(){
     const dispatch = useDispatch();
     const cards = useSelector((state) => state.list);

     useEffect(() => {
         dispatch(loadcards());
     }, [dispatch]);

     return (
      <div>
          <h1>{cards.title}</h1>
          <img src={cards.primaryImage}/>
          <h4>Hints</h4>
          <button>Artist</button><button>Period</button><button>Region</button>
      </div>

     )
};

export default Cards;