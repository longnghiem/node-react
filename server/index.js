const express = require('express');
const mongoose = require('mongoose')
const keys = require('./config/keys')
require("./services/passport")

mongoose.connect('mongodb://<dbuser>:<dbpassword>@ds217002.mlab.com:17002/emaily-dev2')

const app = express(keys.mongoURI);

require("./routes/authRoutes")(app)


const PORT = process.env.PORT || 5000;
app.listen(PORT);
