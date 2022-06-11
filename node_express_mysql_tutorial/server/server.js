const express = require('express');
const cors = require('cors');
const personsRoutes = require("./routes/persons.routes");

// create a express app
const app = express();

// add cors to the app
app.use(cors());

// setup a port for the server
const port = process.env.PORT || 5000;

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// parse requests of content-type - application/json
app.use(express.json());

// define a root route
app.get('/', (req, res) => {
    res.send("Hello World");
});

// define default route for persons.routes
app.use("/api/persons", personsRoutes);

// define the port that app will listen
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
