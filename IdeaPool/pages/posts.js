import React from 'react'

class Posts extends React.Component {

    render() {
        return (
            <div className="container" {...this.props.auth}>
                <h1>I am posts page</h1>
            </div>
        )
    }
}

export default Posts