// Import MySQL connection.
var connection = require("../config/connection.js");

// Helper function for SQL syntax.
// function printQuestionMarks(num) {
//     var arr = [];

//     for (var i = 0; i < num; i++) {
//         arr.push("?");
//     }

//     return arr.toString();
// }

// Helper function for SQL syntax.
// function objToSql(ob) {
//     var arr = [];

//     for (var key in ob) {
//         if (Object.hasOwnProperty.call(ob, key)) {
//             arr.push(key + "=" + ob[key]);
//         }
//     }

//     return arr.toString();
// }

// Object for all our SQL statement functions.
var orm = {
    selectAll: function (input, cb) {
        connection.query("SELECT * FROM ??;", [input], function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    insertOne: function (table, column, value, cb) {
        connection.query("INSERT INTO ?? (??) VALUES (?);", [table, column, value], function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    // An example of obj would be {name: panther, sleepy: true}
    updateOne: function (table, obj, condition, cb) {
        connection.query("UPDATE ?? SET ? WHERE ?;", [table, obj, condition], function (err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    }
};

// Export the orm object for the model (cat.js).
module.exports = orm;
