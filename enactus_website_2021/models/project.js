
var projectSchema  = new MONGOOSE.Schema ({
    name: String,
    descriptions:[{
        title: String,
        description: String,}],
    images: [{url: String}]
});

module.exports = MONGOOSE.model ("Project", projectSchema);