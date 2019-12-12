import React, { useState, useEffect } from 'react'
import Sidemenu from '../components/sidemenu'
import Carousel from '../components/carousel'
import Projectlist from '../components/projectlist'
import { getProjects, getCategories } from '../actions'


const Home = (props) => {

  const { images, categories, projects } = props

  const [filter, setFilter] = useState('All')

  const changeCategory = category => {
    // alert(`Changing to category of: ${category}`)
    setFilter(category)
  }

  const filterProjects = (projects) => {
    if (filter === 'All') {
      return projects
    }
    return projects.filter((project) => {
      return project.tech && project.tech.includes(filter)
    })
  }

  return (
    < div >

      <div className="homepage">
        <div className="container">
          <div className="row">

            <div className="col-lg-3">
              <Sidemenu
                changeCategory={changeCategory}
                activeCategory={filter}
                categories={categories}
                appName={"Tech Stack"}

              />
            </div>

            <div className="col-lg-9">

              <Carousel images={images} />

              <h2>Displaying {filter} Projects</h2>

              <div className="row">
                <Projectlist
                  projects={filterProjects(projects) || []}
                />
              </div>

            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

Home.getInitialProps = async () => {
  const projects = await getProjects()
  const categories = await getCategories()
  const images = projects.map(project => ({
    id: `image-${project.id}`,
    url: project.image,
    name: project.name
  }))
  return {
    projects, images, categories
  }
}

// class Home extends React.Component {

//   static async getInitialProps() {
//     const projects = await getProjects()
//     return {
//       projects
//     }
//   }

//   // constructor(props) {
//   //   super(props)
//   //   this.state = {
//   //     projects: [],
//   //     errorMessage: ''
//   //   }
//   // }
//   // Is called only once component is mounted
//   // componentDidMount() {
//   //   getProjects()
//   //     .then((projects) => {
//   //       this.setState({ projects })
//   //     })
//   //     .catch((error) => {
//   //       this.setState({ errorMessage: error })
//   //     })

//   // }
//   render() {
//     const { projects } = this.props
//     return (
//       < div >
//         <Head>
//           <title>Home</title>
//           <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous" />
//           <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossOrigin="anonymous"></script>
//           <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossOrigin="anonymous"></script>
//           <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossOrigin="anonymous"></script>
//         </Head>

//         <Navbar />
//         <div className="homepage">
//           <div className="container">
//             {/* <button onClick={() => setCount(count + 1)}>Click Me!</button> */}
//             {/* <button onClick={increment} className="btn btn-primary">Increment Number</button> */}
//             {/* <button onClick={decrement} className="btn btn-primary">Decrement Number</button> */}
//             <div className="row">

//               <div className="col-lg-3">
//                 <Sidemenu
//                   appName={"Idea Pool"}
//                 // clickHandler={() => { console.log("Hello World") }}
//                 // count={count} 
//                 />
//               </div>

//               <div className="col-lg-9">

//                 <Carousel />

//                 <div className="row">

//                   {/* {errorMessage &&
//                     <div className="alert alert-danger" role="alert">
//                       {errorMessage}
//                     </div>
//                   } */}

//                   <Projectlist
//                     projects={projects}
//                   // count={count}
//                   />
//                 </div>

//               </div>
//             </div>
//           </div>
//         </div>
//         <Footer />


//         <style jsx>{`
//       .homepage {
//         padding-top: 50px;
//       }
//     `}</style>

//       </div >
//     )
//   }

// }

export default Home
