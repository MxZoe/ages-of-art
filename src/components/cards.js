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
          <h1>Departments</h1>
          <ul>
              {cards.departments.map((card) => (
                  <li>{card.displayName}</li>
              ))}
          </ul>
      </div>
     )
};

export default Cards;