var app = require('express')();
const fs = require('fs');
const csv = require('fast-csv');
const http = require('http');
const cors = require('cors');
const _ = require('lodash');
const mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'my_db'
});
connection.connect();
// staticPart = '../User-Steps-'
// data = [
//     '1.csv', '2.csv', '3.csv', '4.csv'
// ]
// _.forEach(data, function (val) {
//     return csvPoster(val + staticPart);
// });
// function csvPoster(y) {
//     let stream = fs.createReadStream(y);
//     let myData = [];
//     let csvStream = csv
//         .parse()
//         .on("data", function (data) {
//             myData.push(data);
//         })
//         .on("end", function () {
//             myData.shift();

//             const connection = mysql.createConnection({
//                 host: 'localhost',
//                 user: 'root',
//                 password: '',
//                 database: 'my_db'
//             });
//             connection.connect((err) => {
//                 if (err) {
//                     console.error(err);
//                 } else {
//                     let query = 'INSERT INTO users (id, name, date, steps, calories) VALUES ?';
//                     con.query(query, [myData], (error, response) => {
//                         console.log(error || response);
//                     })
//                 }
//             })
//         }) 
//     stream.pipe(csvStream);
// }
app.use(cors());
var server = http.createServer(app);
server.listen(8900, '0.0.0.0', function(){
    console.log('running');
});
process.on('SIGTERM', onServerEnd);
function onServerEnd() {
    connection.end();
    process.exit(0);
}