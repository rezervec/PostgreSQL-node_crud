const express = require("express")
const userRouter = require('./routes/user-router')
const YourUrl = require('./url.js')


const app = express()
app.use(express.json())
app.set('view engine', 'ejs')
app.use('/static', express.static('static'))

app.use('/', userRouter)


app.listen(YourUrl.PORT, () => console.log(`Server is started: ${YourUrl.url}`))