import React from 'react'
// import withAuth from '../components/hoc/withAuth'

class Posts extends React.Component {

    render() {
        return (
            <div className="container" {...this.props.auth} {...this.props.user}>
                <h1>I am posts page</h1>
            </div>
        )
    }
}

export default Posts