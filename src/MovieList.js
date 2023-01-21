import { useEffect, useState } from "react";

import { Crads } from "./Crads";
import { API } from "./gobal";


export function MovieList() {
  // const movies1 = [
  //   {
  //     image: "https://cdn.zeebiz.com/sites/default/files/2023/01/16/221614-varisu-vijay.jpg",
  //     title: "Varisu",
  //     language: "Tamil",
  //     cretifict: "U"
  //   },
  //   {
  //     image: "https://th.bing.com/th?id=OIF.DD62LnFlgze9rR%2f6YlSCSA&pid=ImgDet&rs=1",
  //     title: "Thunivu",
  //     language: "Tamil",
  //     cretifict: "U/A"
  //   }
  // ];

  const [movies1,setMovies1]=useState([])
  useEffect(()=>{
fetch (`${API}/movies1`)
  .then((data)=>data.json())
  .then((mv)=>setMovies1(mv))
  },[])
  
  return (
    <div className="list-mv">
      {movies1.map((mv,index) => (<Crads key={index} movie={mv} />))}
    </div>
  );
}
