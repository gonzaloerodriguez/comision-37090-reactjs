
const Dropdown = () => {
    return (
      
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Productos
            </a>
            <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Ollas</a></li>
                <li><a className="dropdown-item" href="#">Sartenes</a></li>
            </ul>
        </li>
      


    );
}

export default Dropdown;
