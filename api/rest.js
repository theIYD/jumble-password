const express = require('express');
const Jumble = require('./api');
const app = express();

//Start the server
const port = 4000;
app.listen(port, (req, res) => console.log(`Server started on port ${port}`));


app.get('/', (req, res) => res.send('Hello'));

//Password Generator REST
app.get('/gen/?name=:name&DOB=:DOB', (req, res) => {
    if(isNaN(req.params.name) && req.params.DOB) {
        const pwdGenerated = new Jumble().createPassword(req.params.name, req.params.DOB);
        res.json(pwdGenerated);
        res.status(200);
    } else {
        res.json('Err: Provide the correct values');
        res.status(404);
    }
});