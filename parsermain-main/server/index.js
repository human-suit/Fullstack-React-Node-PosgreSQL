const express = require('express')
const http = require('http')
const { Server } = require('socket.io')

const cors = require('cors')
const app = express();

const route = require('./route')
const { addUser } = require('./users')

app.use(express.json())
app.use(cors( { origin: "*" }))
app.use(route)


const db = require('./db.js')
const { log } = require('console')

const server = http.createServer(app)

const io = new Server(server, {
    cors:{
        origin:"*",
        methods:["GET","POST"]
    }
})

const stat = {pro:[]}

const index = 1

// [{name: []}, {namestart:[]}, {opis:[]}, {price:[]}, {crokvip:[]},{statusdata:[]},{trebov:[],}]

async function test(req, res){
   
    const name = await db.query(`SELECT * FROM public.startaps WHERE id = ${index}`)
    res = name.rows
    res.forEach(function(ex) {
        var data = {id: [],name: [], namestart:[], opis:[], price:[], crokvip:[],statusdata:[],trebov:[], url: []}
        data.id.push(ex.id)
        data.name.push(ex.namekomp)
        data.namestart.push(ex.namestart)
        data.opis.push(ex.opisanie)
        data.price.push(ex.price)
        data.crokvip.push(ex.crokvip)
        data.statusdata.push(ex.statusdata)
        data.trebov.push(ex.trebovaniya)
        stas.pro.push(data)
        data = {}
        console.log(stas)
        console.log("aaaa");  
    });
}

async function test2(req, res){
    const name = await db.query('SELECT * FROM public.startaps ORDER BY id ASC ')
    res = name.rows
    // console.log(res)
    res.forEach(function(ex) {
        var data = {id: [],name: [], namestart:[], opis:[], price:[], crokvip:[],statusdata:[],trebov:[], url: [], age: []}
        data.id.push(ex.id)
        data.name.push(ex.namekomp)
        data.namestart.push(ex.namestart)
        data.opis.push(ex.opisanie)
        data.price.push(ex.price)
        data.crokvip.push(ex.crokvip)
        data.statusdata.push(ex.statusdata)
        data.trebov.push(ex.trebovaniya)
        data.url.push(ex.url)
        data.age.push(ex.age)
        stat.pro.push(data)
        data = {}
        console.log(stat)
        
    });
    
}

test2() 
 
io.on('connection', (socket)=>{
    
    

    socket.emit('join', stat);
    socket.on('confirmation', () => { 
        
        console.log('The client received the person');
        
    });
    
    socket.on('comp', ind  => { 
        const stas = {pro:[]}
        this.index = ind.from[0]
        console.log(stat.pro[this.index-1]);
        stas.pro.push(stat.pro[this.index-1])
        console.log(stas);
        socket.emit('gg', stas);
    });

    io.on('disconnect', ()=>{
        console.log("Disconnect")
    })
})

server.listen(5000, ()=>{
    console.log('Start server')
})