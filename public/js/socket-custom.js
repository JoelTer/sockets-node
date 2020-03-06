var socket = io();
// Los ON son para escuchar
socket.on('connect', function() {
    console.log('conectado al servidor');
});


socket.on('disconnect', function() {
    console.log('Perdimos conexión con el servidor');
});

// Los emit para enviar información
socket.emit('enviarMensaje', {
    usuario: 'Joel',
    mensaje: 'Hola mundo!'
}, function(resp) {
    console.log('Resp server;', resp);
});



socket.on('enviarMensaje', function(messaje) {
    console.log('Server', messaje);
});