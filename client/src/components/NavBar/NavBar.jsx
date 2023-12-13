// import React from 'react';
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './NavBar.module.css'; // Importa los estilos CSS

function NavBar() {
    const location = useLocation();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 0; // Cambia el valor según tu preferencia
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        // <nav className={styles.navBar}>
        <nav className={`${styles.navBar} ${scrolled ? styles.scrolled : ''}`}>
            <ul className={styles.navList}>
                <li>
                    <Link
                        to="/home"
                        className={`${styles.navLink} ${location.pathname === '/home' ? styles.active : ''}`}
                    >
                        Inicio
                    </Link>
                </li>
                <li>
                    <Link
                        to="/nosotros"
                        className={`${styles.navLink} ${location.pathname === '/nosotros' ? styles.active : ''}`}
                    >
                        Nosotros
                    </Link>
                </li>
                <li>
                    <Link
                        to="/servicios"
                        className={`${styles.navLink} ${location.pathname === '/servicios' ? styles.active : ''}`}
                    >
                        Servicios
                    </Link>
                </li>
                <li>
                    <Link
                        to="/clases"
                        className={`${styles.navLink} ${location.pathname === '/clases' ? styles.active : ''}`}
                    >
                        Clases
                    </Link>
                </li>
                <li>
                    <Link
                        to="/contacto"
                        className={`${styles.navLink} ${location.pathname === '/contacto' ? styles.active : ''}`}
                    >
                        Contacto
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;
