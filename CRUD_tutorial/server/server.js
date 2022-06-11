const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());

const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Server application');
});

const employeeRoutes = require('./src/routes/employee.routes');

app.use('/api/employees', employeeRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});