const express = require('express')
const app = express()
const path = require('path')
const hbs = require('hbs')

console.log(__dirname)
// Define paths for express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// setting up handle bar engine and view location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Set up static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About me',
        name: 'Aashwin Vats'
    })
})

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Aashwin Vats'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        msg: 'Consider this your Google!',
        name: 'Aashwin Vats'

    })

})

// can send back JSON object
app.get('/weather', (req, res) => {
    res.send({
        forecast: 'Its 50 degrees',
        location: 'Boston'
    })
})

// Catch for all help 404s
app.get('/help/*', (req, res) => {
    res.render('page404', {
        title: '404',
        name: 'Aashwin Vats',
        errorMessage: 'Help article not found.'
    })
})

// Catch for any 404s
app.get('*', (req, res) => {
    res.render('page404', {
        title: '404',
        name: 'Aashwin Vats',
        errorMessage: 'Page not found.'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})