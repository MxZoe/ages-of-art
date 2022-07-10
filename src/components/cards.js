import { useDispatch, useSelector } from "react-redux";
import { loadposts } from "../store/cards";
import { useEffect } from "react";

function Cards(){
    const dispatch = useDispatch();
    const cards = useSelector((state) => state.list);

    useEffect(() => {
        dispatch(loadposts());
    }, [dispatch]);

    return (
        <div class="cardBase">
          <h1>{cards}.title </h1>
          <div class="frame">
          <img src="url"></img>
          </div>  
        </div>
    );
};

export default Posts;