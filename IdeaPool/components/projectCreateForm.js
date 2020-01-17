
import { useState, useEffect } from 'react'

const ProjectCreateform = (props) => {

    const [isInitialDataLoaded, setInitialDataLoaded] = useState(false)

    const defaultData = {
        name: '',
        description: '',
        longDesc: '',
        image: '',
        email: '',
        longDesc: ''
    }
    const formData = props.initialData ? { ...props.initialData } : defaultData

    const [form, setform] = useState(formData)

    const handleChange = (event) => {
        const target = event.target
        const name = target.name

        setform({
            ...form,
            [name]: target.value
        })
    }

    const handleGenreChange = (event) => {
        const { options } = event.target
        const optionsLength = options.length
        let value = []

        for (let i = 0; i < optionsLength; i++) {
            if (options[i].selected) {
                value.push(options[i].value)
            }
        }

        setform({
            ...form,
            tech: value.toString()
        })

    }

    const submitform = () => {
        props.handleFormSubmit({ ...form })
    }

    return (
        <form>
            <div>
                <div className="form-group">
                    <label for="name">Name</label>
                    <input
                        onChange={handleChange}
                        value={form.name}
                        name="name"
                        type="text"
                        className="form-control"
                        id="name"
                        aria-describedby="emailHelp"
                        placeholder="Facebook" />
                </div>
                <div className="form-group">
                    <label for="description">Description</label>
                    <input
                        onChange={handleChange}
                        name="description"
                        value={form.description}
                        type="text"
                        className="form-control"
                        id="description"
                        placeholder="A social media website..." />
                </div>

                <div className="form-group">
                    <label for="email">E-mail</label>
                    <input
                        onChange={handleChange}
                        name="email"
                        value={form.email}
                        type="text"
                        className="form-control"
                        id="email"
                        placeholder="abc@xyz.com" />
                </div>

                <div className="form-group">
                    <label for="image">Image URL (<a href="https://unsplash.com/" target="_blank">Look up</a>)</label>
                    <label for="image" className="info-label">To add a URL here: Click on Look up>Select an image acc. to the theme of your project> Right click on the image> Open Image in New Tab > Copy the URL and paste it below. </label>

                    <input
                        onChange={handleChange}
                        name="image"
                        value={form.image}
                        type="text"
                        className="form-control"
                        id="image"
                        placeholder="Paste the link for image here" />
                    <label for="image" className="info-label">This will be displayed on the project card. </label>

                </div>
                <div className="form-group">
                    <label for="cover">Caraousel cover image URL (<a href="https://unsplash.com/" target="_blank">Look up</a>)</label>
                    <input
                        onChange={handleChange}
                        name="cover"
                        value={form.cover}
                        type="text"
                        className="form-control"
                        id="cover"
                        placeholder="http://......" />
                    <label for="image" className="info-label">This will be displayed in the Carousel.</label>
                </div>
                <div className="form-group">
                    <label for="longDesc">Long Description</label>
                    <textarea
                        onChange={handleChange}
                        name="longDesc"
                        value={form.longDesc}
                        className="form-control"
                        id="longDesc"
                        rows="3"></textarea>
                </div>
                <div className="form-group">
                    <label for="tech">Technical Stack</label>
                    <select
                        onChange={handleGenreChange}
                        multiple className="form-control"
                        id="tech">
                        {/* <option></option> */}
                        <option>HTML/CSS</option>
                        <option>Pthon</option>
                        <option>Java</option>
                        <option>JavaScript</option>
                        <option>MySQL</option>
                        <option>MongoDB</option>
                        <option>C#/.Net</option>
                        <option>PHP</option>
                        <option>Ruby on Rails</option>
                        <option>Node.js</option>
                        <option>React.js</option>
                    </select>
                </div>
                <button
                    onClick={submitform}
                    type="button"
                    className="btn btn-primary">
                    {props.submitButton || 'Create'}
                </button>

                <style jsx>{`
        .info-label {
            font-size: 10px;
        }
        `}
                </style>
            </div>
        </form>
    )
}

export default ProjectCreateform