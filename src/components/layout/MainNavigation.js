import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import FavoritesContextProvider from '../../store/favorites-context';
import styles from './MainNavigation.module.css';
import FavoritesContext from '../../store/favorites-context';

function MainNavigation() {

    const favContext = useContext(FavoritesContext);

    return <header className={styles.header}>
        <div className={styles.logo}>YVR Views</div>
        <nav>
            <ul>
                <li>
                    <Link to='/'>All Viewpoints</Link>
                </li>
                <li>
                    <Link to='new-viewpoint'>Add New </Link>
                </li>
                <li>
                    <Link to='favorites'>Favorites
                    <span className={styles.badge}>{favContext.totalFavorites}</span>
                    </Link>
                </li>
            </ul>
        </nav>
    </header>
}

export default MainNavigation;