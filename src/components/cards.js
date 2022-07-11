import { useDispatch, useSelector } from "react-redux";
import { loadcards } from "../store/cards";
import { useEffect } from "react";
import Draggable from "react-draggable";
import '../styles/cards.css';

function Cards(){
     const dispatch = useDispatch();
     const cards = useSelector((state) => state.list);

     useEffect(() => {
         dispatch(loadcards());
     }, [dispatch]);

     return (
      <Draggable>
        <div class="artwork">
            <h3>{cards.title}</h3>
            <img src={cards.primaryImage}/>
        </div>
      </Draggable>

     )
};

export default Cards;