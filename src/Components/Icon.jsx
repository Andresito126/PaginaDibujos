import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";


function Icon (props){
   if(props.isLike){
       return(
           <FaRegHeart />
       )
   }
   return(
       <FaRegComment />
   )
}

export default Icon;