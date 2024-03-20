const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.all('/', (req, res) => {
    const {body, method} = req;
    if('responseCode' in body){
        const message = body.errorMessage || `Response code is ${body.responseCode}`;
        if('encode' in body && body.encode){
            res.status(body.responseCode).send(JSON.stringify({method, message}));
        }
        res.status(body.responseCode).json({method, message});
        return;
    }
    res.status(200).json({method, message: 'Response code is 200', status: 200});
})


app.listen(7000, () => {
    console.log('Server is running on port 7000');
})