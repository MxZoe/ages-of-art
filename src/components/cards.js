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
          
      </div>
     )
};

export default Cards;