const express = require('express');
const app = express();

const port = 5000;

app.get('/api/clientes', (req, res) => {
    const clientes = [
        {id:1, name: 'mike', lastName: 'Rodriguez'},
        {id:2, name: 'angel', lastName: 'Perez'},
        {id:3, name: 'Matilda', lastName: 'Rodriguez'},        
    ];
    res.json(clientes);
});

app.listen(port, () => console.log(`Server running on port ${port}`));