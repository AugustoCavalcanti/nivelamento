"use client"

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export default function NavBar() {
    return <>
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">Meu blog</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Brand href='/perfil'>
                        <img src='https://fswceulp.nyc3.cdn.digitaloceanspaces.com/cpa%2Fmembros%2Fmadia.jpg' className='img-perfil' />
                    </Navbar.Brand>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
}