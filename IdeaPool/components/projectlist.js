import React from 'react'
import Link from 'next/link'


class Projectlist extends React.Component {

    shorten = (text, maxLength) => {
        if (text && text.length >= maxLength) {
            return text.substr(0, maxLength) + '...'
        }
        return text
    }

    renderProjects(projects) {
        const projectElements = projects.map((project) =>
            (
                <div key={project.id} className="col-lg-4 col-md-6 mb-4">
                    <div className="card h-100">
                        <Link href="/projects/[id]" as={`/projects/${project.id}`}><a ><img className="card-img-top" height='210px' width='100px' src={project.image} alt="" /></a></Link>
                        <div className="card-body">
                            <h4 className="card-title">
                                <Link href="/projects/[id]" as={`/projects/${project.id}`}>
                                    <a >{project.name}</a></Link>
                            </h4>

                            <p className="card-text">{this.shorten(project.description, 150)}</p>
                        </div>
                        <div className="card-footer project-tech">
                            <small className="text-muted ">{project.tech}</small>
                        </div>
                    </div>
                </div>

            ))
        return projectElements

    }
    render() {
        const { projects } = this.props
        return (
            <React.Fragment>
                {this.renderProjects(projects)}
            </React.Fragment>
        )
    }
}

export default Projectlist
