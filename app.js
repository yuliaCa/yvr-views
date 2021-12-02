const express = require("express");
const app = express();

const connected = require("./connection.js");
app.use(express.json());

connected
    .then(() => {
        console.log("connected!");
        const server = app.listen(8080, () => console.log("Listening"));
    });

app.use(express.static(__dirname + "/public"));

// app.set('view engine', 'ejs');

// app.get('*', (req, res) => {
//     res.render('index', { url: req.originalUrl })
// })

const router = require('./backend/routes/index');
app.use('/api/v1', router);


app.get('/*', function (req, res) {
    res.sendFile('/public/index.html',
        function (err) {
            if (err) {
                res.status(404).send(err)
            }
        })
})









