import React from 'react'

// functional component- arrow function
// When to use:
// 1. For smaller components
// 2. Reusable components
// 3. presentational components, partially right, we can use HOOKS and specify state

// const About = () => {
//     const message = "Hello World!"
//     return (
//         <h1>Hello About Page- {message}</h1>
//     )
// }

// const About = () => {
//     const message = "Hello World!"
//     return React.createElement('div', null, "I am getting this with createElement")
// }


// functional component- normal function
// function About() {
//     return (
//         <h1>Hello About Page!</h1>
//     )
// }

class About extends React.Component {

    render() {
        return (
            <h1>Hello I am class component</h1>
        )
    }
}













export default About