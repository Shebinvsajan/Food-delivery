const express = require('express');
const db =require("./db.js")
const menu = require("./Models/menuModel.js");
const app = express();
const port = 8000;
const menuRoute = require('./routes/menuRoute.js')
const userRoute = require('./routes/userRoute.js')
const loginRoute = require('./routes/loginRoute.js')
// const placeorder = require('./routes/oderRoute.js')


// Middleware
app.use(express.json());

// Routes
app.get('/', (req,  res) => {
  res.send('Hello, World!');
});

// get api in mongdb

app.use('/api/menu/',menuRoute)

// add new user
app.use('/api/users/',userRoute)
// Login
app.use('/api/user/',loginRoute)

// place oder

// app.use('/api/order/',placeorder)



// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
