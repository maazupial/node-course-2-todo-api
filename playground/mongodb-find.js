// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db)=>{
if (err)	 {
	return console.log('Unable to connect');
}

console.log('Connected to mongodb server')

// db.collection('Todos').find({
// 	_id: new ObjectID("59854609abb3cf0ef8883e04")
// }).toArray().then((docs)=> {
// console.log('Todos');
// console.log(JSON.stringify(docs, undefined, 2));
// }, (err)=>{
// 	console.log('Unable to fetch todos', err);
// });

// db.collection('Todos').find().count().then((count)=> {
// console.log(`Todos count: ${count}`);
// }, (err)=>{
// 	console.log('Unable to fetch todos', err);
// });

db.collection('Users').find({name: 'Faraz'}).toArray().then((docs)=>{
	console.log('Users');
	console.log(JSON.stringify(docs, undefined, 2));
}, (err)=>{
	console.log('Unable to find user');
})

// db.close();
});