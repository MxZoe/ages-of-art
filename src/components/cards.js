import { useDispatch, useSelector } from "react-redux";
import { loadcards } from "../store/cards";
import { useEffect } from "react";

function Cards(title){
     const dispatch = useDispatch();
     const cards = useSelector((state) => state.list);

     useEffect(() => {
         dispatch(loadcards());
     }, [dispatch]);

    return (
        <div class="cardBase">
          <h1>{title}</h1>
          <div class="frame">
          <img src="url"></img>
          </div>  
        </div>
    );
};

export default Cards;