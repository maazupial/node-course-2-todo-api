// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db)=>{
if (err)	 {
	return console.log('Unable to connect');
}

console.log('Connected to mongodb server')

// db.collection('Todos').findOneAndUpdate({
// 	_id: new ObjectID("5985413628c52efd7f1f8c10")
// }, {
// 	$set: {
// 		completed: true
// 	}
// }, {
// 	returnOriginal: false
// }).then((result)=>{
// 	console.log(result);
// })

db.collection('Users').findOneAndUpdate({
	_id: new ObjectID("598696864add321460107b8f")
},{
	$set: {
		name: 'Faraz'
	}, $inc: {
		age: 1
	}
}, {
	returnOriginal: false
}).then((result)=>{
	console.log(result);
});

// db.close();
});