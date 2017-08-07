
var {ObjectID} = require('mongodb');
var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose.js');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req,res) => {
 var todo = new Todo({
 text: req.body.text
 });

todo.save().then((doc)=>{
 	res.send(doc);
}, (e)=> {
	res.status(400).send(e);
});

}); 

app.get('/todos', (req,res)=>{
	Todo.find().then((todos)=>{
		res.send({todos});
	}, (e)=>{
		res.status(400).send(e);
	});

})

// get /todos/12345

app.get('/todos/:id', (req,res)=>{
	var id = req.params.id;
	
if (!ObjectID.isValid(id)) {
	return res.status(404).send({});
}

Todo.findById(id).then((todo)=>{
	if(!todo) {
		res.status(404).send();
	}

	res.send({todo});
}).catch ((e)=>{
	res.status(400).send();
});
});

// app.get('/users/:id', (req, res)=>{
// 	var id = request.params.id;

// if (!ObjectID.isValid(id)) {
// 	return res.status(404).send({});
// }

// User.findById(id).then((user)=>{
// 	if(!user) {
// 		res.status(404).send({})
// 	}
// 	res.send(JSON.stringify(user, undefined, 2));
// }, (e)=>res.status(400).send({}));

// });


app.listen(3000, ()=>{
	console.log('started on port 3000');
});

module.exports = {app};