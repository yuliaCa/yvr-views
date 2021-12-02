import React from 'react';
import styles from './ViewpointItem.module.css';
import Card from '../ui/Card';
import { useContext } from 'react';
import FavoritesContext from '../../store/favorites-context';
import axios from 'axios';
import FavoritesPage from '../../pages/Favorites';


function ViewpointItem(props) {
    const favContext = useContext(FavoritesContext);


    function toggleFavBtnHandler(event) {

        if (itemIsFav) {
            favContext.removeFav(props.id);
        } else {
            const favViewpoint = {
                _id: props.id,
                name: props.title,
                description: props.description,
                url: props.image,
                address: props.address
            }
            favContext.addFav(favViewpoint);

        }
    }
    const itemIsFav = favContext.itemIsFav(props.id);

    return (
        <li className={styles.item}>
            <Card>
                <div className={styles.image}>
                    <img src={props.image} alt={props.title} />
                </div>
                <div className={styles.content}>
                    <h3>{props.title}</h3>
                    <address>{props.address}</address>
                    <p>{props.description}</p>
                </div>
                <div className={styles.actions}>
                    <button onClick={(event) => toggleFavBtnHandler(event)}>{itemIsFav ? 'Remove from Favorites' : 'Add to Favorites'}</button>
                </div>
            </Card>
        </li>
    )
}

export default ViewpointItem;