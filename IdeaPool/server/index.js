const next = require('next')
const express = require('express');
const bodyParser = require('body-parser')
const authService = require('./services/auth')
// const auth0 = require('../services/auth0')
const mongoose = require('mongoose')
const Project = require('./models/project')
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const config = require('./config/')

const secretData = [
    {
        title: "SecretData1",
        description: "Plans to buld spacecraft"
    },
    {
        title: "SecretData2",
        description: "Plans to buld spacecraft 2"
    },

]

mongoose.connect(config.DB_URI, { useNewUrlParser: true })
    .then(() => console.log('Database Connected')).catch(err => console.error(err))

app.prepare().then(() => {

    const server = express();
    server.use(bodyParser.json())

    server.use(function (err, req, res, next) {
        if (err.name === 'UnauthorizedError') {
            res.status(401).send({ title: 'Unauthorized', detail: 'Unauthorized Access!' });
        }

        // console.log("\n\n\n", res.userID)


    });

    // server.use('/api/v1/index', user)
    server.get('/api/v1/secret', authService.checkJWT, (req, res) => {
        return res.json(secretData)
    })


    // TODO get all from other users
    server.get('/api/v1/projects', (req, res) => {
        // return res.json(projectsData)

        Project.find()
            .then((projects) => {
                res.json(projects)
            })
            .catch((err) => { res.status(400).send(err) })
    })



    server.get('/api/v1/projects/:id', (req, res) => {
        const { id } = req.params

        Project.find({ id: id })
            .then((project) => {
                if (!project) {
                    res.sendStatus(404)
                }

                res.json(project[0])
            })
            .catch((err) => {
                res.status(400).send(err)
            })
        // }

    })

    server.post('/api/v1/projects', (req, res) => {
        // add ID
        // const project = req.body
        // console.log("ddsfadfasd", req.body)
        const proj = new Project(req.body)
        proj.save()
            .then((doc) => {
                res.send(doc)
            })
            .catch((err) => { res.status(400).send(err) })

    })


    server.patch('/api/v1/projects/:id', (req, res) => {

        const { id } = req.params
        const proj = new Project(req.body)
        Project.findOneAndUpdate({ id: id }, { $set: proj }, { new: true })
            .then((doc) => {
                res.send(doc)
            })
            .catch((err) => { res.status(400).send(err) })


    })


    server.delete('/api/v1/projects/:id', (req, res) => {
        const { id } = req.params


        Project.remove({ id: id })
            .then((doc) => {
                res.send(doc)
            })
            .catch((err) => { res.status(400).send(err) })
    })

    // we are handling all of the request comming to our server
    server.get('*', (req, res) => {
        // next.js is handling requests and providing pages where we are navigating to
        return handle(req, res)
    })



    const PORT = process.env.PORT || 3000;

    server.listen(PORT, (err) => {
        if (err) throw err
        console.log('> Ready on port ' + PORT)
    })
})