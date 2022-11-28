import { useContext } from "react";
import {Link} from 'react-router-dom'
import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({producto}) => {

    const {addItem} = useContext(CartContext)

    const onAdd = (contador) => {
        addItem(producto, contador)
    }
    return (
        <div className='row g-0'>
            <div className="col-md-4">
                <img src={producto.img} className="img-fluid rounded-start" />
            </div>
            <div className="col-md-8">
                <div className="card-body">
                    <h5 className='card-title'>{producto.nombre}</h5>
                    <p className='card-text'>Linea: {producto.linea}</p>
                    <p className='card-text'>Precio: ${producto.precio}</p>
                    <p className='card-text'>Stock: {producto.stock} productos</p>
                    <ItemCount stock = {producto.stock} onAdd={onAdd}/><br />
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;