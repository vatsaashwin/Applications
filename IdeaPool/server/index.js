

const next = require('next')
const express = require('express');
const bodyParser = require('body-parser')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const filePath = './data.json'
const fs = require('fs')
const path = require('path')
const projectsData = require(filePath)

app.prepare().then(() => {

    const server = express();
    server.use(bodyParser.json())

    server.get('/api/v1/projects', (req, res) => {
        return res.json(projectsData)
    })

    server.get('/api/v1/projects/:id', (req, res) => {
        const { id } = req.params

        const project = projectsData.find(m => m.id === id)
        return res.json(project)
    })

    server.post('/api/v1/projects', (req, res) => {
        // add ID
        const project = req.body
        projectsData.push(project)

        const pathToFile = path.join(__dirname, filePath)
        const stringifiedData = JSON.stringify(projectsData, null, 2)

        fs.writeFile(pathToFile, stringifiedData, (err) => {
            if (err) {
                return res.status(422).send(err)
            }
            return res.json('Project has been successfully added.')
        })
    })

    server.patch('/api/v1/projects/:id', (req, res) => {

        const { id } = req.params
        const project = req.body
        const projectIndex = projectsData.findIndex(m => m.id === id)

        projectsData[projectIndex] = project

        const pathToFile = path.join(__dirname, filePath)
        const stringifiedData = JSON.stringify(projectsData, null, 2)

        fs.writeFile(pathToFile, stringifiedData, (err) => {
            if (err) {
                return res.status(422).send(err)
            }
            return res.json('Project has been successfully updated.')
        })
    })



    server.delete('/api/v1/projects/:id', (req, res) => {
        const { id } = req.params

        const projectIndex = projectsData.findIndex(m => m.id === id)
        projectsData.splice(projectIndex, 1)

        const pathToFile = path.join(__dirname, filePath)
        const stringifiedData = JSON.stringify(projectsData, null, 2)

        fs.writeFile(pathToFile, stringifiedData, (err) => {
            if (err) {
                return res.status(422).send(err)
            }
            return res.json('Project has been successfully added.')
        })
    })



    // server.get('/faq', (req, res) => {
    //   res.send(`
    //     <html>
    //       <head></head>
    //       <body><h1>Hello World!</h1>
    //       </body>
    //     </html>
    //   `)
    // })

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