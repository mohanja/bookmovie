import React from "react"; 

export default function SliderOne(){
    return(
      <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="10000">
          <img src="https://1847884116.rsc.cdn77.org/tamil/home/varisu180123_1.jpg" class="d-block w-100" alt="..." height={"350"}/>
        </div>
        <div class="carousel-item" data-bs-interval="2000">
          <img src="https://th.bing.com/th?id=OIF.L%2f%2fzQbVklsR4SqsNBD7iUA&pid=ImgDet&rs=1" class="d-block w-100" alt="..."height={"350"}/>
        </div>
        <div class="carousel-item">
          <img src="https://wallpapercave.com/wp/wp11525156.jpg" class="d-block w-100" alt="..."height={"350"}/>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    
   
    )
}