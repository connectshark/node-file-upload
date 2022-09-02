const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 3000
const app = express()

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.use('/upload', require('./routes/upload'))


app.listen(PORT, () => console.log(`listen on ${PORT}`))