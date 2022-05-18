const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const aboutSchema = new Schema({
    body: String,
    team: Number,
});

module.exports = mongoose.model('About', aboutSchema);