import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router";
import { Seat } from "./Seat";


export function Crads({movie}) {
 const neviget=useNavigate()

  return (
      
      <div className="row">
      <img className="image" src={movie.image}  alt="" />
      <h3>{movie.title}</h3>
      <span>{movie.cretifict}</span>
      <span>{movie.language}</span>
      <button type="button" class="btn btn-danger" onClick={neviget('/seat')}>Book</button>  
     </div>
 
  );
}







