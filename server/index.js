const express = require('express');

const port = 3001;
const app = express();

app.get('/getData', (req, res) => {
    res.json({ message: 'Hello!' });
})

app.listen(port, () => {
    console.log(`Server listening on ${port}`)
});