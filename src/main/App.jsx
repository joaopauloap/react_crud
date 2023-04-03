import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'
import React from 'react'

import Logo from '../components/template/Logo'
import Nav from '../components/template/Nav'
import Main from '../components/template/Main'
import Footer from '../components/template/Footer'

export default props =>
<div className="app">
    <Logo></Logo>
    <Nav></Nav>
    <Main icon="fa fa-home" title="Inicio" subtitle="Segundo projeto react do curso web moderno da cod3r"></Main>
    <Footer></Footer>
</div>