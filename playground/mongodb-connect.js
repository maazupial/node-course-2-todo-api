// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db)=>{
if (err)	 {
	return console.log('Unable to connect');
}

console.log('Connected to mongodb server')

// db.collection('Todos').insertOne({
// text: 'Something to do',
// completed: false

// }, (err, result)=>{
// 	if (err) {
// 		return console.log('Unable to insert Todos', err);
// 	}

// 	console.log(JSON.stringify(result.ops, undefined, 2))
// });

// insert into users name age location

// db.collection('Users').insertOne({
// 	name: 'Maaz',
// 	age: 28,
// 	location: 'Bombay'

// }, (err, result)=>{
// 	if (err){
// 		return console.log('Unable to add user', err);
// 	}

// 	console.log(result.ops[0]._id.getTimestamp());
// });

db.close();
});