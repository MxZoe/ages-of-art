import { useDispatch, useSelector } from "react-redux";
import PaintingCards, { loadcards } from "../store/PaintingCards";
import { useEffect } from "react";
import Draggable from "react-draggable";
import axios from "axios";
import * as actions from "../store/api";
import '../styles/cards.css';
function newPaintingApiCall(newUrl){
  axios
  .get(newUrl)
  .then(function (response) {
    return(response);
  });

}
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Cards(){
     const cards = useSelector((state) => state.list);
     const arrayNum = randomNumber(0, (cards.list.length -1))
     const newId = cards.list[arrayNum];
     const newUrl = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${newId}`
     const newResponse = newPaintingApiCall(newUrl);

     return(
      <Draggable>
        <div className="artwork">
            <h3>{newResponse.title}</h3>
            <img src={newResponse.primaryImage}/>
        </div>
      </Draggable>
     )


     
};

export default PaintingCards;