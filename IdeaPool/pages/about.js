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

            <div className="container" {...this.props.auth}>
                <h1>About </h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        )
    }
}


export default About