const router = require('express').Router({ mergeParams: true });


const { postViewpoint, getViewpoints } = require('../controllers/viewpointController.js');

const { postFavorites, getFavorites, deleteFavorite } = require('../controllers/favoritesController.js')

router.get('/allViewpoints', getViewpoints)

router.post('/newViewpoint', postViewpoint)

router.post('/favorites', postFavorites)
router.get('/favorites', getFavorites)
router.delete('/favorites/:id', deleteFavorite)




module.exports = router;