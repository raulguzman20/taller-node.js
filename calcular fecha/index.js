const express = require('express');
const path = require('path');
const app = express();
const host = '127.0.0.1';
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/views/index.html'));
});


app.listen(port, host, () => {
    console.log(`Server is running at http://${host}:${port}`);
});
