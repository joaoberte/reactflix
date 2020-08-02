import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logo.png';
//import ButtonLink from '../ButtonLink';
import Button from '../Button';
import './Menu.css'


function Menu() {
    return (
        <nav className="Menu" >
            <Link to="/" >
                <img src={Logo} alt="Reactflix logo" className="Logo" />
            </Link>

            <Button as={Link} to="/cadastro/video" className="ButtonLink" >
                Novo Vídeo
            </Button>

        </nav>
    );
}

export default Menu;
