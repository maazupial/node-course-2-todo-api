const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result)=>{
// 	console.log(result);
// });

// Todo.findOneAndRemove


Todo.findByIdAndRemove('598c2240f98e89567254a73e').then((todo)=>{
console.log(todo);
});

Todo.findOneAndRemove({_id: '598c2240f98e89567254a73e'}).then((todo)=>{
console.log(todo);
});