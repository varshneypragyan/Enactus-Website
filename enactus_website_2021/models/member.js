
var memberSchema  = new MONGOOSE.Schema ({
    name: String,
    year: String,
    department : String,
    photo : String

});

module.exports = MONGOOSE.model ("Member", memberSchema);