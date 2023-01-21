import{Link}from "react-router-dom"
import { MovieList } from "./MovieList";
import SliderOne from "./sliderOn";

export function Home() {
  return (
    <div>
      <nav className="navbar bg-info">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
           <b>Show Time</b> 
          </a>
          <div className='link-gap'>
            <Link to={"/"}>Home</Link>
          
            <Link to={"/seat"}>seat</Link>
          </div>
        </div>
       
      </nav>
      <SliderOne/> 
     <MovieList/>
   
    </div>
  );
}

