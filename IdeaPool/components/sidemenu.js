import { useState } from 'react'
import { useRouter } from 'next/router'
import Modal from './modal'
import ProjectCreateForm from './projectCreateForm'
import { createProject } from '../actions'

const Sidemenu = (props) => {
    const { categories } = props
    const router = useRouter()
    let modal = null

    const handleCreateProject = (project) => {
        createProject(project).then((projects) => {
            modal.closeModal()
            router.push('/')
        })
    }

    return (
        <div className='sidemenu-padding'>

            <Modal ref={elem => modal = elem} hasSubmit={false}>
                <ProjectCreateForm handleFormSubmit={handleCreateProject} />
            </Modal>
            {/* <button onClick={props.clickHandler}>Click Me!</button> */}
            <h1 className="my-4">{props.appName}</h1>
            <div className="list-group">
                {
                    categories.map(c => (
                        <a
                            onClick={() => props.changeCategory(c.name)}
                            key={c.id}
                            href="#"
                            className={`list-group-item ${props.activeCategory === c.name ? 'active' : ''}`} > {c.name}</a>
                    ))
                }
            </div>
            <style jsx>{`
            .sidemenu-padding {
                padding: 20px;
            }
            `}
            </style>
        </div >
    )
}

export default Sidemenu