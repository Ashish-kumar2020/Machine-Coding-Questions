import { useEffect, useState } from "react";
import { CAROUSAL_IMAGES } from "../data/assets";
import {GalleryHorizontalEnd} from "lucide-react"
const Carousal = () => {
  const [currImageIndex, setCurrImagesIndex] = useState(0);

  const handleNextImage = () => {
      
    if (currImageIndex < CAROUSAL_IMAGES.length - 1) {
      setCurrImagesIndex((prev) => prev +1);
    }
  };

  const handlePrevImage = () => {
  
    if (currImageIndex > 0) {
      setCurrImagesIndex((prev) => prev - 1);
    }
  };

  const handleDotImageChange = (index) => {

    setCurrImagesIndex(index)

  }

//   useEffect(() => {
//     let timer = setInterval(() => {
//       setCurrImagesIndex((prev) => {
//         if (prev === CAROUSAL_IMAGES.length - 1) {
//           return 0;
//         }else{
//             return prev + 1;
//         }
//       });
//     }, 3000);

//     return () => {
//       clearInterval(timer);
//     };
//   },[]);


  return (
    <div className="carousal-main-container">
      {/* Left Button Container */}
      <div className="left-btn-container">
        <button type="button" onClick={handlePrevImage}>
          Left
        </button>
      </div>

      {/* Images Container */}
      <div className="images-container">
        <img
          src={CAROUSAL_IMAGES[currImageIndex]}
          alt={`Carousal-Image-${currImageIndex}`}
        />
        <ul className="dot-container">
            {
                CAROUSAL_IMAGES.map((_,index) => {
                   return <li key={index}><button onClick={() => handleDotImageChange(index)} className={currImageIndex === index ? "activeDot" : "inActiveDot"}><GalleryHorizontalEnd/></button> </li>
                })
            }
            
           </ul>
      </div>
       {/* <GalleryHorizontalEnd/> */}

      {/* Right Button Container */}
      <div className="right-btn-container">
        <button type="button" onClick={handleNextImage}>
          Right
        </button>
      </div>
    </div>
  );
};

export default Carousal;
