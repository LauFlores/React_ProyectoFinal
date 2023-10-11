import './ItemDetailContainer.css';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore'
import ItemDetail from '../ItemDetail/ItemDetail';
import SpinnerLoader from '../SpinnerLoader/SpinnerLoader';
import db from '../../utils/firebaseConfig';


const ItemDetailContainer = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    console.log('Item ID from URL:', id);

    // Encode the id parameter before using it in the URL or the database query
    const encodedId = encodeURIComponent(id);

    const [item, setItem] = useState({})
   

    

    

    // const productFilter = async () => {
    //     const docRef = doc(db, "articulos", id);
    //     const docSnapshop = await getDoc(docRef);
    //     let product = docSnapshop.data()
    //     product.id = docSnapshop.id



    //     if (product === undefined) {
    //         navigate('/*')
    //         } else {
    //             setItem(product)
    //         }
    //     }

    const productFilter = async () => {


        const docRef = doc(db, "articulos", encodedId);
        const docSnapshot = await getDoc(docRef);
    
        if (docSnapshot.exists()) {
            let product = docSnapshot.data();
            product.id = docSnapshot.id;
            setItem(product);
        } else {
            navigate('/*'); // Navigate to the NotFound page or handle it as needed
        }
    }

    useEffect(() => {

        productFilter()

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            {Object.keys(item).length === 0 ? <SpinnerLoader /> : <ItemDetail prop={item} />}
        </>
    )
}

export default ItemDetailContainer

