const Viewpoint = require('../models/viewpoint.js');


const postViewpoint = (req, res) => {
    let viewpoint = new Viewpoint({
        name: req.body.name,
        address: req.body.address,
        url: req.body.url,
        description: req.body.description
    });
    console.log(req.body)
    viewpoint.save()
        .then(result => {
            res.set('content-location', `/allViewpoints/${viewpoint._id}`);
            res.status(201).json({
                data: viewpoint,
                url: `/allViewpoints/${viewpoint._id}`

            })
        }
        )
        .catch(error => { res.status(500).send(error) });
}


const getViewpoints = (req, res) => {
    Viewpoint.find({}).exec()
        .then(results => {
            res.status(200).json(results)
        })
        .catch(error => res.status(500).send(error))

}

// const getTheLocation = (req, res) => {
//     Location.findOne({ "_id": req.params.id }).exec()
//         .then(results => {
//             res.status(200).json(results)
//         })
//         .catch(error => res.status(500).send(error))
// }

module.exports = {
    postViewpoint,
    getViewpoints
}