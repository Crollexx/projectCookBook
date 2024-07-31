const express = require('express')
const indexRoute = require('./routes/index.routes')
const configServer = require('./config/configServer')


const PORT = 3000
const app = express()
configServer(app)


app.use('/api', indexRoute)



app.listen(PORT, () => {
    console.log(`Сидим на ${PORT} порте`);
})