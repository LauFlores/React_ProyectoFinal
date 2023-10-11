
import './ItemDetail.css';
import PropTypes from "prop-types"
import ItemCount from '../ItemCount/ItemCount';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'
import { useState, useContext } from 'react';
import CartContext from '../../context/CartContext';
import Swal from 'sweetalert2';


const ItemDetail = ({ prop }) => {

  const { title, price, stock, pic1, pic2, pic3, description, id } = prop;
  // const { title, price, stock, pic1, pic2, pic3, pic4, description, id } = prop;

  const { addProductToCart } = useContext(CartContext)


  const [article, setArticle] = useState(pic1)
  const [quantity, setQuantity] = useState(1)
  const [showButton, setShowButton] = useState(false)

  const onAdd = () => {
      if (quantity !== null) {
          setShowButton(true)
          addProductToCart({ title, price, pic1, quantity, id, stock })
      } else {
          Swal.fire({
              title: 'Error',
              text: 'Tienes que seleccionar la cantidad que deseas',
              icon: 'error',
              confirmButtonText: 'Aceptar'
          })
      }
  }

  // Función para seleccionar la imagen principal en el grid
  const selectArticle = (img) => {
      setArticle(img)
  }

  return (
      <>
          <h1>Características del artículo</h1>
      <div className="container">

          <img className="primary-pic" alt={`Articulo ${title}`} src={`../assets/images/${article}`} />

          <img className="pic1 pic-detail" onClick={() => selectArticle(pic1)} alt={`Articulo ${title}`} src={`../assets/images/${pic1}`} />
          <img className="pic2 pic-detail" onClick={() => selectArticle(pic2)} alt={`Articulo ${title}`} src={`../assets/images/${pic2}`} />
          <img className="pic3 pic-detail" onClick={() => selectArticle(pic3)} alt={`Articulo ${title}`} src={`../assets/images/${pic3}`} />
          {/* <img className="pic4 pic-detail" onClick={() => selectArticle(pic4)} alt={`Articulo ${title}`} src={`../assets/images/${pic4}`} /> */}

          <div className='title'>
              <h3>{title}</h3>
              <h4 className='price'>${price}</h4>
          </div>

          <div className="detail">
            <p className='detail__description'>{description}</p>
            <p>Abonalo en <span>3 cuotas sin interés</span> de ${parseInt(price / 3)}</p>
            <p>Llega gratis en 72hs hábiles</p>  
          </div>

          <div className="buy">

              {!showButton ?
                  <ItemCount stock={stock} initial={1} onAdd={onAdd} updateQuantity={setQuantity} />
                  :
                  <Button variant="contained">
                      <Link to="/cart">Finalizar compra</Link>
                  </Button>}
          </div>
      </div>
      </>
  )
}


ItemDetail.propTypes = {
  prop: PropTypes.shape ({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    stock: PropTypes.number.isRequired,
    pic1: PropTypes.string.isRequired,
    pic2: PropTypes.string.isRequired,
    pic3: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    id: PropTypes.string,
  }),
};

export default ItemDetail

