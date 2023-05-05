import { useContext, useState } from "react"
import { useHistory } from "react-router-dom"

const AddBlog = () => {

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('mario')
    const [isLoading, setIsLoading] = useState(false)

    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault();
        if(body.length < 100){
            alert("Body should consist of at least 100 characters.")
        }
        else{
            const blog = { title, body, author }

            setIsLoading(true)

            fetch('http://localhost:8000/blogs', {
                method: 'POST',
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify(blog)
            }).then(() => {
                console.log("new blog added")
                setIsLoading(false)
                history.push('/')
            })

            console.log(blog)
        }
    }

    return (
        <div className="add-blog">
            <h2>Add a new blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input 
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog body:</label>
                <textarea 
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                />
                <label>Blog author:</label>
                <select
                    required
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                { !isLoading && <button>Add blog</button>}
                { isLoading && <button disabled>Adding blog...</button> }
            </form>
        </div>
    )
}

export default AddBlog