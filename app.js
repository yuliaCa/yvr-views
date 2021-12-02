const express = require("express");
const app = express();

const connected = require("./connection.js");
app.use(express.json());

// connected
//     .then(() => {
//         console.log("connected!");
//         const server = app.listen(8080, () => console.log("Listening"));
//     });

connected.once('open', () => {
    const server = app.listen(process.env.PORT || 8080, () => {
        console.log("Connected and listening");
    });
});


const router = require('./backend/routes/index');
app.use('/api/v1', router);

app.use(express.static(__dirname + "/public"));

app.get('/*', function (req, res) {
    res.sendFile('public/index.html', { root: __dirname },
        function (err) {
            if (err) {
                res.status(404).send(err)
            }
        }
    )
})









