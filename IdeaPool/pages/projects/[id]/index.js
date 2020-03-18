
import { useRouter } from 'next/router'
import { getProjectById, deleteProject } from '../../../actions'
import Link from 'next/link'

const Project = (props) => {
    const router = useRouter()
    const { id } = router.query
    const { project } = props
    // const {}

    const handleDeleteProject = (id) => {
        deleteProject(id).then(() => {
            // Handle later
            router.push('/')
        })
    }

    // function Edit(props) {
    //     return
    //     <div><Link href="/projects/[id]/edit" as={`/projects/${id}/edit`}>
    //         <button
    //             className="btn btn-warning btn-lg mr-4 px-5"
    //             role="button">Edit</button>
    //     </Link>
    //         <button onClick={() => handleDeleteProject(id)} className="btn btn-danger btn-lg mr-4 px-5" href="#" role="button">Delete</button></div>
    // }

    // function Hide(props) {
    //     return <h1>HIDING</h1>;
    // }

    // function CheckUser(props) {
    //     const isCurrentUser = props.user;
    //     console.log("\n\n\n\n", project.userID)
    //     console.log("\n\n\n\n", isCurrentUser)

    //     if (isCurrentUser === project.userID) {
    //         return <Edit />;
    //     }
    //     return <Hide />;
    // }

    return (
        <div className="container" {...props.auth} {...props.user}>
            <div className="jumbotron p-4">
                <h1 className="display-2">{project.name}</h1>
                <p className="lead">{project.description}</p>
                <p><b>Required Skills: </b>{project.tech}</p>
                <p> Request to Collab at: {project.email ? project.email : 'Email not provided'} </p>
                <hr className="my-4" />

                <Link href="/projects/[id]/edit" as={`/projects/${id}/edit`}>
                    <button
                        className="btn btn-warning btn-lg mr-4 px-5"
                        role="button">Edit</button>
                </Link>
                <button onClick={() => handleDeleteProject(id)} className="btn btn-danger btn-lg mr-4 px-5" href="#" role="button">Delete</button>
                {/* <CheckUser isCurrentUser={false} /> */}


            </div>
            <p className="desc-text">{project.longDesc}</p>
            <p className="text-secondary text-right">{project.userID}</p>
            <style jsx>{`
                .desc-text {
                font-size: 21px;
                }
                .info-p{
                    font-size: 15px;
                    padding: 20px
                }
            `}
            </style>
        </div >
    )
}

// [{
//     id: 'image-1', image: 'https://img.cinemablend.com/filter:scale/quill/0/f/5/2/a/6/0f52a6843a25c1a5c1f9a0c00548cad9e1d912e2.jpg?mw=600}]
// }]

Project.getInitialProps = async ({ query }) => {
    const project = await getProjectById(query.id)

    return { project }
}

export default Project