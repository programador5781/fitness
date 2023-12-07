import React from 'react';
import { Link } from 'react-router-dom'; // Asumiendo que se usa React Router para la navegación
import styles from './NavBar.module.css'; // Importa los estilos CSS

function NavBar() {
    return (
        <nav className={styles.navBar}>
            <ul className={styles.navList}>
                <li>
                    <Link to="/" className={styles.navLink}>Inicio</Link>
                </li>
                <li>
                    <Link to="/nosotros" className={styles.navLink}>Nosotros</Link>
                </li>
                <li>
                    <Link to="/servicios" className={styles.navLink}>Servicios</Link>
                </li>
                <li>
                    <Link to="/clases" className={styles.navLink}>Clases</Link>
                </li>
                <li>
                    <Link to="/contacto" className={styles.navLink}>Contacto</Link>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;
