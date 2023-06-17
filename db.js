const mongoose = require("mongoose");
var mongoUrl = "mongodb+srv://shebinvsajan5:Doctor123@cluster0.ucatzji.mongodb.net/food";
mongoose.connect(mongoUrl, {  useUnifiedTopology: true,useNewUrlParser: true });
var db = mongoose.connection;

db.on('connected', () => {
    console.log("Database connection successful");
});

db.on('error', (error) => {
    console.log("Database connection error", error);
});

module.exports = mongoose;
