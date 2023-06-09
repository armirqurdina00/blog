import { useContext } from "react"
import { Link } from "react-router-dom"

export default function BlogPreview(props) {
    const blogs = props.blogs
    const title = props.title

    return (
        <div className="blog-preview-container">
            <h2>{title}</h2>
            { blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>
                        <h2>{blog.title}</h2>
                        <p>Written by: {blog.author}</p>
                    </Link>
                </div>
            )) }
        </div>
    )
}