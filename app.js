const fs = require('fs')
const tickets = require('./tickets.json')

const express = require('express')
const path = require('path')

const app = express()

// app.get('/', (req, res) => {
//     res.send(`<h1>Serveris pradetas, GET request made at: ${req.url}</h1>`)
// })


//Get all tickets
app.get('/api/tickets', (req, res) => {
    res.json(tickets)
});

//Get specific ticket info
app.get('/api/tickets/:id', (req, res) => {
    res.send(req.params.id)
})

// Sukuriamas static folderis
app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 1234;

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT} port!`)
})