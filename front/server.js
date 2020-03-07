let express = require('express')
let app = express()

app.use(express.static('public'))

app.get('/', (req, res) => {

    res.sendFile(__dirname + '/index.html');

})

app.get('/:otherpage', (req, res) => {

    res.redirect('/')

})

app.listen('8080', () => console.log("that's right, ma gueule"))