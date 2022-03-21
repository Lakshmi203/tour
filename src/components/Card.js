import React, { useState } from "react";
import heart from '../assets/heart-solid.svg'

function Card(props){

    let [btnText, setbtnText] = useState("Add to favourite");
    let [classState, setclassState] = useState("")

    function setFavourite(){
        setbtnText((prevState) => {
            if(prevState === "Add to favourite" ){
            return "Added to favourite";
            }else{
            return "Add to favourite";
             }
         });
         setclassState((prevClass)=>{
             if(prevClass == ""){
                 return "active"
             }
             else{
                 return ""
             }
         })
        };
    return(
        <div className={`card ${classState}`}>
            <img src={heart} className="heart" />
            <img src={props.cardContent.imgSrc} />
            <h3>{props.cardContent.name}</h3>
            <p>{props.cardContent.description}</p>
            <button onClick={setFavourite}>{btnText}</button>
        </div>
    )
}
export default Card;