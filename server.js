const app = require('./app')
const PORT = 8080

app.listen(PORT, (err) => {
    if (err) 
    console.log(`Express server listening on port ${PORT}!`)
})