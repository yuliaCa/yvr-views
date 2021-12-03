import React from 'react';
import { useContext } from 'react';
import FavoritesContext from '../store/favorites-context';
import ViewpointsList from '../components/viewpoints/ViewpointsList';

function FavoritesPage() {
    const favContext = useContext(FavoritesContext);
    let content;

    if (favContext.totalFavorites === 0) {
        content = <p>You have no favorites. Start adding some</p>
    } else {
        content = <ViewpointsList viewpoints={favContext.favorites} />
    }


    return (
        <section>
            <h1>My Favorite Viewpoints</h1>
            {content}
        </section>
    )
}

export default FavoritesPage;