import { Link } from "react-router-dom";
const Dropdown = () => {
    return (
        
        <li className="nav-item dropdown">
          <span className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Secciones
          </span>
          <ul className="dropdown-menu">
          <li><Link className="dropdown-item" to ="/category/cacerola" >Cacerolas</Link></li>
          <li><Link className="dropdown-item" to ="/category/sarten" >Sartenes</Link></li>
          <li><Link className="dropdown-item" to ="/category/fuente" >Fuentes</Link></li>
          <li><Link className="dropdown-item" to ="/category/bifera" >Biferas</Link></li>
          </ul>
        </li>
    );
}

export default Dropdown;
