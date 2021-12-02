const mongoose = require('mongoose');
require('mongoose-type-url');

const Schema = mongoose.Schema;

const ViewpointSchema = new Schema({
    _id: { type: String },
    name: { type: String, required: true, maxLength: 50 },
    address: { type: String, maxLength: 50 },
    url: [{ type: mongoose.SchemaTypes.Url }],
    description: { type: String, required: true, maxLength: 256 }
});

const ViewpointFav = mongoose.model("favorite", ViewpointSchema);


module.exports = ViewpointFav;

