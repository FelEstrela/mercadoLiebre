const express = require('express');
const app = express();
app.use(express.static('public'));
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

app.listen(3030, () => {
    console.log('El servidor esta corriendo');
});