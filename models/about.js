const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const aboutSchema = new Schema({
    name: String,
    team: Number,
});

module.exports = mongoose.model('About', aboutSchema);