const express = require('express');
const { writeFileSync } = require('fs');
const Router = express.Router();

// var today = new Date();
// var time =
// 	today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
// Router.get('/addtolist', (req, res, next) => {
// 	writeFileSync(
// 		'./textFiles/hello.txt',
// 		`user started writting file at ${time}`,
// 		(err) => {
// 			console.log(err);
// 		}
// 	);

//     res.send('Date added successfully!')
// });

module.exports = Router;
