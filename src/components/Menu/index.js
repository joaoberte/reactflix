import React from 'react';
import Logo from '../../assets/img/logo.png';
//import ButtonLink from '../ButtonLink';
import Button from '../Button';
import './Menu.css'


function Menu() {
    return (
        <nav className="Menu" >
            <a href="/" >
                <img src={Logo} alt="Reactflix logo" className="Logo" />
            </a>

            <Button as="a" href="/" className="ButtonLink" >
                Novo Vídeo
            </Button>

        </nav>
    );
}

export default Menu;
