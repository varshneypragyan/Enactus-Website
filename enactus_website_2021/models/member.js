var mongoose = require ("mongoose");

var memberSchema  = new mongoose.Schema ({
    name: String,
    year: String,
    department : String

});

module.exports = mongoose.model ("Member", memberSchema);