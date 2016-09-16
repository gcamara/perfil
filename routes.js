module.exports = function(app){
	console.log("chamado");
    var users = require('./nodeControllers/users');
    app.get('/import', users.import);
    app.get('/users', users.findAll);
    app.get('/users/:id', users.findById);
    app.post('/users', users.add);
    app.put('/users/:id', users.update);
    app.delete('/users/:id', users.delete);
}