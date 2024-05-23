import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import './styles.css';

const ImageSlider = ({ url, limit, page }) => {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchImages(url) {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();

      setImages(data);
      setIsLoading(false);
    } catch (e) {
      setErrorMsg(e.message);
      setIsLoading(false);
    }
  }
  function handlePrevious(){
   setCurrentSlide(currentSlide - 1);
   if(currentSlide === 0){
    
    setCurrentSlide(0)
   }
  
  }
  function handleNext(){
    setCurrentSlide(currentSlide + 1)
    if(currentSlide === images.length -1 ){

      setCurrentSlide(images.length -1 )
    }
    

  }

  useEffect(() => {
    if (url !== "") {
      fetchImages(`https://picsum.photos/v2/list?page=${page}&limit=${limit}`);
    }
  }, [url, page, limit]);

  if (isLoading) {
    <div>loading data ...</div>;
  }
  if (errorMsg) {
    return <div>An error has been occured</div>;
  }
  return (
    <div className="container">
      <BsArrowLeftCircleFill onClick={handlePrevious} className={currentSlide === 0 ? "arrow arrow-left display" : "arrow arrow-left"} />
      {images && images.length > 0
        ? images.map((imageItem , index) => {
            return (
              <img
                key={imageItem.id}
                alt={imageItem.download_url}
                src={imageItem.download_url}
                className={currentSlide === index  ? "current-image" : "current-image hide-current-image" }
                
              />
            );
          })
        : null}
      <BsArrowRightCircleFill className={currentSlide === images.length -1 ? "arrow arrow-right display" : "arrow arrow-right"} onClick={handleNext} />
       <span className="current-indicators">
        {images && images.length > 0 ? 
         images.map((_ , index) => {
           return <button
            className={currentSlide === index ? "current-indicator" : "current-indicator inactive-indicator"}
            key={index}
            onClick={()=> setCurrentSlide(index)}
           ></button>
         })
        
        
        :null} 
       </span>
      
    </div>
  );
};
export default ImageSlider;
