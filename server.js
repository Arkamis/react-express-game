const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

const port = 5000;

app.get('/api/clientes', (req, res) => {
    const clientes = [
        {id:1, name: 'mike', lastName: 'Rodriguez'},
        {id:2, name: 'angel', lastName: 'Perez'},
        {id:3, name: 'Matilda', lastName: 'Rodriguez'},        
    ];
    res.json(clientes);
});

io.on('connect', (client) => {
    console.log('Cliente connected');
    client.on('addPlayer', (data)=> {
        console.log(data);
    });
})

server.listen(port, () => console.log(`Server running on port ${port}`));