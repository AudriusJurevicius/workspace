const http = require('http')
const port = 1234

const fs = require('fs')
const tickets = require('./tickets.json')

const express = require('express')

const server = http.createServer((req, res) => {
    console.log(`request was made: ${req.url}`)
    res.writeHead(200, {'Content-Type': 'text/html'})
    fs.readFile('issue-ticket.html', (err, data) => {
        if (err) {
            res.writeHead(404)
            res.write('File not found!')
        }
    res.end(data)
    })
})

server.listen(port, (error) => {
    if (error) {
        console.log(error)
    } else {
        console.log('Server is running!')
    }
})
