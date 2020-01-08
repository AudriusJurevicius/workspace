const http = require('http')
const port = 1234

const fs = require('fs')

const server = http.createServer((req, res) => {
    console.log(`request was made: ${req.url}`)
    res.writeHead(200, {'Content-Type': 'application/json'})
    fs.readFile('tickets.json', (err, data) => {
        if (err) {
            res.writeHead(404)
            res.write('File not found!')
        } else {
            res.write(data)
        }
    res.end()
    })
})

server.listen(port, (error) => {
    if (error) {
        console.log(error)
    } else {
        console.log('Server is running!')
    }
})