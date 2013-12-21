var net = require('net');

function zero(i) {
	return (i < 10 ? '0' : '') + i;
}

function now() {
	var d = new Date();
	return d.getFullYear() + '-' + zero(d.getMonth()+1) + '-' + zero(d.getDate()) + ' ' + zero(d.getHours()) + ':' + zero(d.getMinutes());
}

var server = net.createServer(function (socket) {
	socket.end(now() + '\n');
}).listen(process.argv[2]);