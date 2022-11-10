// Modules and Globals
const express = require('express')
const methodOverride = require('method-override')
const cors = require('cors')
const app = express()

// Express Settings
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(cors())


// Controllers & Routes
app.use('/posts', require('./controllers/posts'))


app.get ('/', (req, res) => {
    res.render('about')
})

app.get ('*', (req, res) => {
    res.render('error404')
})

// Listen for Connections
app.listen(process.env.PORT, () => {
    console.log('Blog app is running on port 5400')
})

