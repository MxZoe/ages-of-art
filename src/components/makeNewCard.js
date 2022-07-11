import { useDispatch, useSelector } from "react-redux";
import { loadcards } from "../store/cards";
import { useEffect } from "react";

function NewCard(){
  const dispatch = useDispatch();
  const newCard = useSelector((state) => state.list);

  useEffect(() => {
      dispatch(loadcards());
  }, [dispatch]);
  return(
    newCard
  )
}

export default NewCard;