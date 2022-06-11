const Person = require("../models/persons.model");

// exports findAll function that calls findAll function from the persons.model
exports.findAll = function (req, res) {
    Person.findAll(function (err, persons) {
        console.log("Controller");
        if (err) res.send(err);
        console.log("res", persons);
        res.send(persons)
    });
};

// exports findById function that calls findById function from the persons.model
exports.findById = function (req, res) {
    Person.findById(req.params.id, function (err, person) {
        console.log("Controller")
        if (err) res.send(err);
        console.log("res", person);
        res.json(person);
    });
};

// exports create function that calls create function from the persons.model
// checks that fields in the newPerson object are not null
exports.create = function (req, res) {
    const newPerson = new Person(req.body);
    // handles null error
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        console.log("Controller")
        res
            .status(400)
            .send({ error: true, message: "Please provide all required fields" });
    } else {
        Person.create(newPerson, function (err, person) {
            console.log("Controller")
            if (err) res.send(err);
            res.json({
                error: false,
                message: "Person added successfully!",
                data: person,
            });
        });
    }
};

// exports update function that calls update function from the persons.model
// checks that fields in the sent object are not null
exports.update = function (req, res) {
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        console.log("Controller")
        res
            .status(400)
            .send({ error: true, message: "Please provide all required fields" });
    } else {
        Person.update(
            req.params.id,
            new Person(req.body),
            function (err, person) {
                console.log("Controller")
                if (err) res.send(err);
                res.json({ error: false, message: "Person updated successfully!" });
            }
        );
    }
};

// exports delete function that calls update function from the persons.model
exports.delete = function (req, res) {
    Person.delete(req.params.id, function (err, person) {
        console.log("Controller")
        if (err) res.send(err);
        res.json({ error: false, message: "Person deleted successfully!" });
    });
};
