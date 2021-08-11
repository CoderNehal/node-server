const express = require('express');
const Router = express.Router();
const path = require('path');
const root = require('../util/path');
const { readFileSync, writeFileSync } = require('fs');
// Router.get('/addtolist', (req, res, next) => {
// 	const Html = readFileSync('./textFiles/loginForm.html', 'utf-8');
// 	res.send(Html);
// });
// Router.post('/handlelist', (req, res, next) => {
// 	console.log('post request');
// 	console.log(req.body);
// 	const oldfile = readFileSync('./textFiles/hello.txt', 'utf-8');
// 	writeFileSync('./textFiles/hello.txt', oldfile +'\n'+ req.body.name, (err) => {
// 		console.log(err);
// 	});
// 	console.log('File written successfull');
// 	res.redirect('/');
// });
Router.get('/view', (req, res, next) => {
	const list = readFileSync(
		path.join(root, 'textFiles', 'todolist.json'),
		'utf-8',
		(err, data) => {
			return data;
		}
	);
	

	// res.setHeader(200,'Content-type','text/json').send(list);
	// res.send(`<html><body><h1 style='text-align:center;color:blue'>Yor list</h1><ul>
	// ${list.length!==0&&[list].map((item,idx)=>{
	// 	return String(`<li>${item}</li>`)
	// })}
	// </ul></body></html>`)
	res.json(JSON.stringify(list,null,4))
});
module.exports = Router;
