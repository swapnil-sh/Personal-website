import React from 'react';
import { Navbar, Nav} from 'react-bootstrap';

import styles from './Navbar.module.css';

const NavBar = () => {
    return (
        <div className={styles.container}>
            <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Swapnil Sharma</Navbar.Brand>
            <Nav className="ml-auto">
            <Nav.Link href="#home" className={styles.links}>Resume</Nav.Link>
            <Nav.Link href="#home" className={styles.links}>Projects</Nav.Link>
            <Nav.Link href="#features" className={styles.links}>About</Nav.Link>
            <Nav.Link href="#pricing" className={styles.links}>Contact</Nav.Link>
            </Nav>
            </Navbar>
        </div>
        
    )
}

export default NavBar;