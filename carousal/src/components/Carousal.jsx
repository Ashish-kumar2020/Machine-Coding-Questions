import { useEffect, useState } from "react";
import { CAROUSAL_IMAGES } from "../data/assets";
import { GalleryHorizontalEnd } from "lucide-react";
const Carousal = () => {
  const [currImageIndex, setCurrImagesIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const handleNextImage = () => {
    setCurrImagesIndex((prev) => {
      if (prev === CAROUSAL_IMAGES.length - 1) {
        return 0;
      } else {
        return prev + 1;
      }
    });
  };

  const handlePrevImage = () => {
    setCurrImagesIndex((prev) => {
      if (prev === 0) {
        return CAROUSAL_IMAGES.length - 1;
      } else {
        return prev - 1;
      }
    });
  };

  const handleDotImageChange = (index) => {
    setCurrImagesIndex(index);
  };

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  const handleKeyDownEvents = (e) => {
 
    if (e.key === "ArrowLeft") {
        handlePrevImage()
    }
    if(e.key === "ArrowRight"){
        handleNextImage()
    }
  };

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrImagesIndex((prev) => {
        if (prev === CAROUSAL_IMAGES.length - 1) {
          return 0;
        } else {
          return prev + 1;
        }
      });
    }, 3000);

    return () => {
      clearInterval(timer);
    };
  }, [isPaused]);

  useEffect(() => {
    console.log("keyboard effect mounted");
    window.addEventListener("keydown", handleKeyDownEvents);
    return () => {
      window.removeEventListener("keydown", handleKeyDownEvents);
    };
  }, []);

  return (
    <div
      className="carousal-main-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
       
    >
      {/* Left Button Container */}
      <div className="left-btn-container">
        <button type="button" onClick={handlePrevImage} aria-label="Previous-Image">
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
          {CAROUSAL_IMAGES.map((_, index) => {
            return (
              <li key={index}>
                <button
                  onClick={() => handleDotImageChange(index)}
                  className={
                    currImageIndex === index ? "activeDot" : "inActiveDot"
                  }
                  aria-current={currImageIndex === index ? "true" : undefined}
                  aria-label={`Go to image ${index + 1}`}
                >
                  <GalleryHorizontalEnd />
                </button>{" "}
              </li>
            );
          })}
        </ul>
      </div>
      {/* <GalleryHorizontalEnd/> */}

      {/* Right Button Container */}
      <div className="right-btn-container">
        <button type="button" onClick={handleNextImage} aria-label="Next-Image">
          Right
        </button>
      </div>
    </div>
  );
};

export default Carousal;
