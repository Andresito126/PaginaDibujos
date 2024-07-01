import React from "react";
import { FaRegHeart, FaHeart, FaRegComment } from "react-icons/fa";


function Icon (props){
   if(props.isLike){
        if(props.liked === true){
            return(
                <FaHeart />
            )
        }
        return(
            <FaRegHeart />
        )
   }
   return(
       <FaRegComment />
   )
}

export default Icon;