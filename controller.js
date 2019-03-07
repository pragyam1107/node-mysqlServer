const fs = require('fs');
const csv = require('fast-csv');
const _ = require('lodash');
const mysql = require('mysql');

function csvPoster(req, res, next) {
    let stream = fs.createReadStream(req.body);
    let myData = [];
    let csvStream = csv
        .parse()
        .on("data", function (data) {
            myData.push(data);
        })
        .on("end", function () {
            myData.shift();

            // const connection = mysql.createConnection({
            //     host: 'localhost',
            //     user: 'root',
            //     password: '',
            //     database: 'my_db'
            // });
            // mysql.connect((err) => {
            //     if (err) {
            //         console.error(err);
            //     } else {
                    let query = 'INSERT INTO users (id, name, date, steps, calories) VALUES ?';
                    connection.query(query, [myData], (error, response) => {
                        console.log(error || response);
                    })
            //     }
            // })
        }) 
    stream.pipe(csvStream);
}

function getData(req, res, next) {
    mysql.connect((err) => {
        if (err) {
            console.error(err);
        } else {
            let query = 'select * from users';
            connection.query(query, (err, res) => {
                console.log(err || res);
            })

        }
    })
}

module.exports = {
    csvPoster,
    getData
}