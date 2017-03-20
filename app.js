var restify = require('restify');
var builder = require('botbuilder');

var server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, function() {
    console.log('%s listening to %s', server.name, server.url);
});


var connector = new builder.ChatConnector({
    appId: '',
    appPassword: ''
});


var bot = new builder.UniversalBot(connector);
server.post('/api/messages', connector.listen());


bot.dialog('/', [
    function(session) {
        builder.Prompts.text(session, 'Waht is your name')
    },
    function(session, args, next) {
        session.send('hello ' + args.response)
    }
]);