import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"
import React from 'react'
import img1 from '../lospinos2.jpg';
import img2 from '../inmujeres.jpg';
import img3 from '../cfe.jpg';
import img5 from '../sre.png';


const ServicesCarousel = () => {
  return (
    <Carousel 
           showArrows={true}
           infiniteLoop={true}
           showThumbs={true}
           showStatus={false}
           autoPlay={true}
           interval={3000}>
       <>
         <img src={img5} alt="carousel img1" />
         <div className="myCarousel">
             <h1>SRE</h1>
         </div>
       </>
       <>
         <img src={img2} alt="carousel img1" />
         <div className="myCarousel">
            <h1>INMUJERES</h1>
         </div>
       </>
       <>
         <img src={img3} alt="carousel img1" />
         <div className="myCarousel">
             <h1>CFE</h1>
         </div>
       </>
       <>
         <img src={img1} alt="carousel img1" />
         <div className="myCarousel">
             <h1>LOS PINOS</h1>
         </div>
       </>
    </Carousel>
  )
}

export default ServicesCarousel