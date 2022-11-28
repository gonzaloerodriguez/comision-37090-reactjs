import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import './CartWidget.css'
const CartWidget = () => {
    const {getItemQuantity} = useContext(CartContext)
    return (
        <>
            <ul className='navbar-nav me-auto cartWidget'>
                <li className="nav-item">
                    <Link className="nav-link" to="/cart">
                        <button className="btn btn-secondary">
                            <img className="carrito" src={"https://firebasestorage.googleapis.com/v0/b/reactjs-7e838.appspot.com/o/carrito.png?alt=media&token=20d29de3-b15e-405c-b8c8-e3ee4d1336bd"}/>
                            { getItemQuantity() >= 1 && <span className="cantCarrito">{getItemQuantity()}</span>}
                            </button>
                    </Link>
                    
                </li>
            </ul>
        </>
    );
}

export default CartWidget;