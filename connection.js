var data = require('./data')
var socket_mapping = {}

function connection(io){
  io.on('connection', function(socket){
    console.log('a user connected')

    socket.on('register', function(user_name, fn){
      if(data.users.hasOwnProperty(user_name)){
        fn(false)
      }
      else{
        fn(true)
        data.users[user_name] = {point: null}
        socket.user_name = user_name
        socket_mapping[user_name] = socket
        io.emit('update', data)
      }
    })

    socket.on('vote', function(point){
      console.log('a user voted ' + point)
      data.users[socket.user_name] = {point: point}
      io.emit('update', data)
    })

    socket.on('restart', function(){
      console.log('start/restart')

      data.started = true
      for(var key in data.users){
        data.users[key].point = null
      }
      io.emit('update', data)
    })

    socket.on('disconnect', function(){
      console.log('a user disconnected')

      if(socket.is_admin)
        return

      delete data.users[socket.user_name]
      if(Object.keys(data.users).length === 0){
        data.started = false;
      }
      io.emit('update', data)
    })

    // Admin
    socket.on('admin_register', function(){
      console.log('admin registered')
      socket.is_admin = true
      socket.emit('update', data)
    })

    socket.on('admin_kick', function(user_name, fn){
      var ip = socket.handshake.address
      if(ip && ip.replace(/:/g, '') === '1'){
        socket_mapping[user_name].disconnect()
        delete socket_mapping[user_name]
        delete data.users[user_name]
        fn(true)
        console.log(`kicked user ${user_name}`)
      }
      else{
        fn(false)
      }
      io.emit('update', data);
    })
  });
}

module.exports = connection;