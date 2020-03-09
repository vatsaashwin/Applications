import React, { useState, useEffect } from 'react'
import Sidemenu from '../components/sidemenu'
import Carousel from '../components/carousel'
import Projectlist from '../components/projectlist'
import { getProjects, getCategories } from '../actions'


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

  return (
    < div {...props.auth}>

      <div className="homepage" >
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
              <h1>
                {isAuthenticated && <span>{user.name}</span>}
              </h1>
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


export default Home
