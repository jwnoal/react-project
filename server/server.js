const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

const userRouter = require('./user')
const app = express()

const server = require('http').Server(app)
const io = require('socket.io')(server)
io.on('connection',function(socket){
	console.log('user login')
})

app.use(cookieParser())
app.use(bodyParser.json())
app.use('/user',userRouter)
server.listen(3005,function(){
	console.log('Node app start at port 3005')
})



