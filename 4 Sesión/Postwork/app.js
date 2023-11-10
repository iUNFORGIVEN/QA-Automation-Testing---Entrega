const { login, getToken } = require("./Login");
const express = require('express')
const bodyParser = require('body-parser');
const port = 3000
const app = express()
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(bodyParser.raw())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/login', (req, res) => {
    const userCredentials = {email: req.body.email, password: req.body.password}
    const response = login(userCredentials)
    res.send(response)
})

app.post('/authentication', (req, res) => {
    const userCredentials = { 
        email: req.body.email, 
        password: req.body.password };
    
    const userToken = getToken(userCredentials);

    if (userToken) {
        res.send({ 
            success: true, 
            token: userToken });
    } else {
        res.status(401).send({ 
            success: false, 
            message: 'Autenticación fallida' });
    }
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})