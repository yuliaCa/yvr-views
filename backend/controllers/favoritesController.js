const ViewpointFav = require('../models/viewpointFav.js');

const postFavorites = (req, res) => {
    let viewpoint = new ViewpointFav({
        _id: req.body._id,
        name: req.body.name,
        address: req.body.address,
        url: req.body.url,
        description: req.body.description
    });
    console.log(req.body)
    viewpoint.save()
        .then(result => {
            res.set('content-location', `/favorites/${viewpoint._id}`);
            res.status(201).json({
                data: viewpoint,
                url: `/favorites/${viewpoint._id}`

            })
        }
        )
        .catch(error => { res.status(500).send(error) });
}


const getFavorites = (req, res) => {
    ViewpointFav.find({}).exec()
        .then(results => {
            res.status(200).json(results)
        })
        .catch(error => res.status(500).send(error))

}

const deleteFavorite = (req, res) => {
    ViewpointFav.deleteOne({ _id: req.params.id })

        .then((results) => {
            res.json({
                data: results,
                _links: {
                    "all-locations": {
                        href: `/favorites`,
                    },
                },
            });
        })
        .catch((error) => res.status(405).json(error));
};

module.exports = {
    postFavorites,
    getFavorites,
    deleteFavorite
}