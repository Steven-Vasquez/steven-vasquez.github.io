import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import "../stylesheets/ImageCarousel.css"


const ImageCarousel = ({ carouselImages }) => {

  // Customize the carousel settings
  /*
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  */

  // Adjust the size of the carousel container
  const containerStyle = {
    maxWidth: '600px',
    maxHeight: '600px',
    margin: '0 auto',
    backgroundColor: 'gray',
  };

  // Adjust the size of the carousel images
  const imageStyle = {
    maxHeight: '400px',
    objectFit: 'contain',
  };

  return (
    <div style={containerStyle}>
      <Carousel >
        {carouselImages.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Image ${index + 1}`} style={imageStyle} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};
export default ImageCarousel;