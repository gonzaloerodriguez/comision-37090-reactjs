import './navbar.css'
import Formbusqueda from '../FormBusqueda/Formbusqueda';
import Dropdown from './Dropdown/Dropdown';
import Sections from './Sections/Sections';
import Cartwidget from './CartWidget/CartWidget';

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">A la Olla!</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <Sections/>
                            <Dropdown/>
                        </ul>
                    </div>
                    <Formbusqueda busqueda = {"Buscar"}/>
                    <Cartwidget/>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
