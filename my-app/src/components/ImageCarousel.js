import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import "../stylesheets/ImageCarousel.css"


const ImageCarousel = ({ carouselImages, captions }) => {

  return (
    <div className='carousel-container'>
      <Carousel infiniteLoop={true} >
        {carouselImages.map((image, index) => (
          <div key={index} className='carousel-display'>
            <a href={image} target="_blank" rel="noopener noreferrer">
              <img src={image} alt={`Image ${index + 1}`} className="carousel-big-images"/>
            </a>
            
            <p className="carousel-caption">{captions[index]}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};
export default ImageCarousel;