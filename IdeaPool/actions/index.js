
import axios from 'axios'

const PROJ_DATA = []

const BASE_URL = "http://localhost:3000"

const CATEGORY_DATA = [
    { id: '0', name: 'All' },
    { id: '1', name: 'HTML | CSS' },
    { id: '2', name: 'JavaScript' },
    { id: '3', name: 'React.js' },
    { id: '4', name: 'Node.js' },
    { id: '5', name: 'MySQL' },
    { id: '6', name: 'MongoDB' },
    { id: '7', name: 'PHP' },
    {
        id: '8', name: 'Ruby on Rails'
    }
]

export const getCategories = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(CATEGORY_DATA)
        }, 50)
    })
}

export const getProjects = () => {
    return axios.get(`${BASE_URL}/api/v1/projects`)
        .then((res) => {
            return res.data
        })
}

export const createProject = (project) => {

    project.id = Math.random().toString(36).substr(2, 5)
    return axios.post(`${BASE_URL}/api/v1/projects`, project).then(res => res.data)
}

export const getProjectById = (id) => {
    return axios.get(`${BASE_URL}/api/v1/projects/${id}`).then(res => res.data)
}

export const updateProject = (project) => {
    return axios.patch(`${BASE_URL}/api/v1/projects/${project.id}`, project)
        .then(res => res.data)
}

export const deleteProject = (id) => {
    return axios.delete(`${BASE_URL}/api/v1/projects/${id}`).then(res => res.data)
}

