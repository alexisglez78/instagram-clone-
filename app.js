const express = require('express');
const app = express();
const PORT = 5000;

const customMiddleware = (res, resp, next) => {
    console.log('middleware executes')
    next()
}


// app.use(customMiddleware)
app.get('/', (req, resp) => {
    console.log('home')
    resp.send('hello worlds')
})
app.get('/about',customMiddleware, (req, resp) => {
    console.log('about')
    resp.send('about page ')
})

app.listen(PORT, () => {
    console.log('server is running in the port', PORT)
})