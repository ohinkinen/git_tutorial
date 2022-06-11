const db = require("../config/db.config");

// create a person object
const Person = function (person) {
    this.first_name = person.first_name;
    this.last_name = person.last_name;
}

// function for creating a insert to persons table
// takes in newPerson which has first_name and last_name
Person.create = function (newPerson, result) {
    db.query("INSERT INTO persons set ?", newPerson, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};

// function for finding person by id from persons table
// takes in id
Person.findById = function (id, result) {
    db.query(
        "SELECT * from persons where id = ?",
        id,
        function (err, res) {
            if (err) {
                console.log("error: ", err);
                result(err, null);
            } else {
                result(null, res);
            }
        }
    );
};

// function for finding every person from persons table
Person.findAll = function (result) {
    db.query("SELECT * from persons", function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            console.log("persons : ", res);
            result(null, res);
        }
    });
};

// function for updating person by id from persons table
// takes in id and person which has first_name and last_name
Person.update = function (id, person, result) {
    db.query(
        "UPDATE persons SET first_name=?,last_name=? WHERE id = ?",
        [
            person.first_name,
            person.last_name,
            id,
        ],
        function (err, res) {
            if (err) {
                console.log("error: ", err);
                result(null, err);
            } else {
                result(null, res);
            }
        }
    );
};

// function for deleting person by id from persons table
// takes in id
Person.delete = function (id, result) {
    db.query("DELETE FROM persons WHERE id = ?", [id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};

module.exports = Person;