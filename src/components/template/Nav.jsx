import './Nav.css'
import React from 'react'
import {Link} from 'react-router-dom'

export default props =>
    <aside className="menu-area">
        <nav className="menu">
            {/* Fazer nav-item com componente */}
            <Link to="/">
                <i className="fa fa-home"></i> Início
            </Link>
            <Link to="/users">
                <i className="fa fa-users"></i> Usuários
            </Link>
            <a href="#/contact">
                <i className="fa fa-phone"></i> Contato
            </a>
        </nav>
    </aside>