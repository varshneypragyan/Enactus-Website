var mongoose = require ("mongoose");

var projectSchema  = new mongoose.Schema ({
    name: String,
    descriptions:[{
        title: String,
        description: String,}],
    images: [{url: String}]
});

module.exports = mongoose.model ("Project", projectSchema);