import './ItemCount.css';
import Button from '@mui/material/Button';
import Swal from 'sweetalert2';
import { useState } from "react";
import PropTypes from 'prop-types';

const ItemCount = ({ stock, initial, onAdd, updateQuantity }) => {

    const [count, setCount] = useState(initial);

    const addItem = () => {
        if (count < stock) {
            setCount(count + 1)
            updateQuantity(count + 1)

        } else {
            Swal.fire({
                title: 'Alerta de stock!',
                text: `Por el momento solo contamos con ${stock} unidades en stock, por lo que no es posible agregar más`,
                icon: 'error',
                confirmButtonText: 'Intentar nuevamente'
            })
        }
    }

    const removeItem = () => {
        if (count > initial) {
            setCount(count - 1)
            updateQuantity(count -1)
        }
    }

    return (
        <>
            <div className='item-list__counter'>
                <Button className='btn-counter' onClick={removeItem}>-</Button>
                <p>{count}</p>
                <Button className='btn-counter' onClick={addItem}>+</Button>
            </div>
            <Button className='btn btn-add-cart' variant="outlined" onClick={onAdd}>Agregar al carrito</Button>
        </>
    )
}

ItemCount.propTypes = {
    stock: PropTypes.number.isRequired,
    initial: PropTypes.number.isRequired, 
    onAdd: PropTypes.func.isRequired, 
    updateQuantity: PropTypes.func.isRequired
}


export default ItemCount;