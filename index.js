require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');

require("./database/configDB");

app.use(express.json());

app.use(
    cors({
        origine: "*",
    })
);

const routes = require("./routes/products");
app.use(routes);

app.listen(5000, () => {
    console.log("App listening on port 5000");
});