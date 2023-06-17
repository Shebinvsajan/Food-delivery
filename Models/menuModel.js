const mongoose = require('mongoose')

const menuSchema = mongoose.Schema({
    foodname: {type: String, require },
    price: {type: Number, require },
    category: { type:String, require },
    description: {type: String, require },
    image: { type:String, require },
    offer: {type: Number, require }
}, { TimeStamps: true },
)
const menuModel = mongoose.model('menus', menuSchema);
module.exports = menuModel;