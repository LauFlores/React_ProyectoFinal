import './Carrousel.css';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel'


const Carrousel = () => {

    return (
        <Carousel fade className='carrousel-main'>
            <Carousel.Item>
                <img
                    className="d-block w-100 img-carrousel item-carrousel-1"
                    src="../assets/images/carrousel/maceta-vela-deco.jpg"
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 img-carrousel item-carrousel-2"
                    src="../assets/images/carrousel/pared-verde-gabinete-madera.jpg"
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 img-carrousel item-carrousel-3"
                    src="../assets/images/carrousel/ramitas-jarron-velas.jpg"
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 img-carrousel item-carrousel-4"
                    src="../assets/images/carrousel/sofa-maceta.jpg"
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    )
}

export default Carrousel;