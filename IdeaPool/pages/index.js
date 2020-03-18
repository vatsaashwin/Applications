import React, { useState, useEffect } from 'react'
import Sidemenu from '../components/sidemenu'
import Carousel from '../components/carousel'
import Projectlist from '../components/projectlist'
import { getProjects, getCategories } from '../actions'
import Landing from '../components/landing'

const Home = (props) => {

  const { images, categories, projects } = props
  const { isAuthenticated, user } = props.auth
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

  if (isAuthenticated) {
    return (

      < div {...props.auth} {...props.user}>

        <div className="homepage" >


          <div className="container">


            <div className="row">


              <div className="col-lg-3">
                <Sidemenu
                  changeCategory={changeCategory}
                  activeCategory={filter}
                  categories={categories}
                  appName={"Tech Stack"}
                  userDeets={user}

                />
              </div>

              <div className="col-lg-9">
                {user.name && <p className="text-right">Welcome, {user.name}</p>}
                {/* <Carousel images={images} /> */}

                <h3 className="py-3">{filter} Projects:</h3>


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
  else {
    {
      return (

        < div {...props.auth} {...props.user}>

          <div className="homepage" >
            <Landing />
          </div>
        </div>

      )
    }
  }
}

Home.getInitialProps = async () => {
  // const
  const projects = await getProjects()
  // console.log("mapped project", projects)
  // console.log(typeof (projects))
  const categories = await getCategories()
  const images = projects.map(project => ({
    id: `image-${project.id}`,
    url: project.image,
    name: project.name
  }))
  // const user = await userDeets()
  return {
    projects, images, categories
  }
}


export default Home
