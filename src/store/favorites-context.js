import React from 'react';
import axios from 'axios';
import { createContext, useState, useEffect } from 'react';

let fetchedFavorites = [];


const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFav: (favViewpoint) => { },
    removeFav: (favID) => { },
    itemIsFav: (favID) => { }
});

export function FavoritesContextProvider(props) {

    const [userFavorites, setUserFavorites] = useState([]);
    useEffect(() => {
        axios.get('/api/v1/favorites')
            .then(results => setUserFavorites(results.data))
            .catch(error => console.log(error))
    }, [])



    function addFavHandler(favViewpoint) {
        axios.post('/api/v1/favorites', favViewpoint)
            .then(axios.get('/api/v1/favorites')
                .then((results) => {
                    setUserFavorites(results.data)
                })
            )
            .catch(error => console.log(error))
    }

    function removeFavHandler(favID) {
        // setUserFavorites((prevFav) => {
        //     return prevFav.filter(eachFav => eachFav.id !== favID)
        // })
        // console.log(favID)
        axios.delete(`/api/v1/favorites/${favID}`)
            .then(axios.get('/api/v1/favorites')
                .then((results) => {
                    setUserFavorites(results.data)
                })
            )
            .catch(error => console.log(error))
    }

    function isFavHandler(favID) {
        return userFavorites.some(eachFav => eachFav._id === favID)
    }

    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFav: addFavHandler,
        removeFav: removeFavHandler,
        itemIsFav: isFavHandler
    };
    return (
        <FavoritesContext.Provider value={context}>
            {props.children}
        </FavoritesContext.Provider>
    );
}

export default FavoritesContext;