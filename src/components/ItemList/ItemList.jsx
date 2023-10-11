import PropTypes from "prop-types"

import './ItemList.css'
import Item from '../Item/Item';


const ItemList = ({ items }) => {

    return (
        <>
            {items.map((article, index) => <Item item={article} key={index} />)}
        </>
    )
}

ItemList.propTypes = {
  items: PropTypes.array,
};

export default ItemList

