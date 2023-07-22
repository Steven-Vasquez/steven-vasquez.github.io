import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import "../stylesheets/ImageCarousel.css"


const ImageCarousel = ({ carouselImages, captions }) => {

  return (
    <div className='carousel-container'>
      <Carousel infiniteLoop={true} >
        {carouselImages.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Image ${index + 1}`} className="carousel-images"/>
            
            <p className="carousel-caption">{captions[index]}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};
export default ImageCarousel;