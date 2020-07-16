const express = require('express')
const app = express()
const port = 5000


const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://keemsy:dksy149685@@boilerplate.ktlna.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongeDB Connected...'))
  .catch(err => console.log(err))


app.get('/', (req, res) => res.send('Hello World! 안녕하세요~'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

