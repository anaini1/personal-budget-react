const express = require('express');
const app = express();
const fs = require('fs');
const port = 2000;
const cors = require('cors');

app.use('/', express.static('public'))

app.use(cors());

const server_data = fs.readFileSync('server-data.json', 'utf8'); 

app.get('/budget', (req, res) => {
    res.send(server_data);
})

app.listen(port, () =>{
    console.log(`API Started at http://localhost:${port}`);
})
