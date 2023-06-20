const mongoose = require("mongoose");
require('dotenv').config();
mongoose.connect(process.env.MONGO_URL , {  useUnifiedTopology: true,useNewUrlParser: true });
var db = mongoose.connection;

db.on('connected', () => {
    console.log("Database connection successful");
});

db.on('error', (error) => {
    console.log("Database connection error", error);
});

module.exports = mongoose;





