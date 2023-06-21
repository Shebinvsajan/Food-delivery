const express = require('express');
const cors = require('cors');
const db = require('./db.js');
const menu = require('./Models/menuModel.js');
const app = express();
const port = 8000;
const menuRoute = require('./routes/menuRoute.js');
const userRoute = require('./routes/userRoute.js');
const loginRoute = require('./routes/loginRoute.js');
const path = require("path");


// for react static files
app.use(express.static("dist"));


// Middleware
app.use(cors({origin: '*'}))
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.use('/api/menu/', menuRoute);
app.use('/api/users/', userRoute);
app.use('/api/user/', loginRoute);

// for render react static files
app.get("/*", (req, res) => {
  res.sendFile(path.join(path.resolve(`${path.dirname("")}/dist/index.html`)));
});


// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
