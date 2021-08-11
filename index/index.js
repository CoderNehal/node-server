//express
const bodyParser = require('body-parser');
const express = require('express');
const { readFileSync } = require('fs');
const adminRoutes = require('../routes/admin');
const shopRoutes = require('../routes/shop');
const root = require('../util/path');
const path = require('path');
const port = process.env.PORT || 5000; 

// const app = express();
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use('/admin',adminRoutes);
// app.use(shopRoutes);
// app.get('/', (req, res, next) => {
// 	const Html = fs.readFileSync('./textFiles/welcome.html', 'utf-8');
// 	res.send(Html);
// });
// app.use((req,res,next)=>{
// 	res.status(404).send('<h1>Page not found</h1>')
// })
// app.listen(3000);
const app = express();
app.get('/', (req, res, next) => {
	const homePage = readFileSync(
		path.join(root,'textFiles','welcome.html'),
		'utf-8',
		(err, data) => {
			return data;
		}
	);
	res.send(homePage);
});
app.get('/api',(req,res,next)=>{
	res.json({a:1});
app.use(express.static(path.join(root,'public')))
app.use('/admin', adminRoutes);
app.use('/', (req, res, next) => {
	res.status(404).send(
		readFileSync(
			path.join(root, 'textFiles', '404notfound.html'),
			'utf-8',
			(err, data) => {
				return data;
			}
		)
	);
});
app.listen(port);
