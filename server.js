const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';

const app = next({ dir: '.', dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    const server = express();
    
    server.get('*', (req, res) => {
        return handle(req, res)
    });

    const port = process.env.port || 3000;
    server.listen(port, () => console.log(`Example app listening on port ${port}!`))
})
