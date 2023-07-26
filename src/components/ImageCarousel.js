import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import "../stylesheets/ImageCarousel.css"


const ImageCarousel = ({ carouselImages, captions }) => {
  
  const handleImageClick = (image) => {
    // Handle the click event here, for example, open the image in a new tab/window
    window.open(image, '_blank');
  };

  return (
    <div className='carousel-container'>
      <Carousel infiniteLoop={true} >
        {carouselImages.map((image, index) => (
          <div key={index} className='carousel-display' onClick={() => handleImageClick(image)}>
              <img src={image} alt={`Image ${index + 1}`} className="carousel-big-images" />
            
            
            <p className="carousel-caption">{captions[index]}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};
export default ImageCarousel;