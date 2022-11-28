import {useState} from 'react';
import { Link } from 'react-router-dom';

const ItemCount = ({stock, onAdd}) => {
    const [contador, setContador] = useState(1) //valor inicial

    const agregarAlCarrito = () => {
        onAdd(contador)
    }

    const incrementar = () => contador < stock && setContador(contador + 1)

    const decrementar = () => contador > 1 && setContador(contador - 1)
    
    return (
        <>
            <button onClick={decrementar} className='btn btn-light mb-2'>-</button>
                    {contador}
            <button onClick={incrementar} className='btn btn-light mb-2'>+</button> <br />
            <button className="btn btn-dark mb-2" onClick={agregarAlCarrito}>Agregar al carrito</button>
            <button onClick={agregarAlCarrito} className="btn btn-secondary"><Link to="/checkout" className="nav-link">Finalizar compra</Link></button>
        </>
    );
}

export default ItemCount;