import { useContext, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import useFetch from "./hooks/useFetch";

const BlogDetails = () => {
    const { id } = useParams()
    const { data: blog, error, isLoading } = useFetch(`http://localhost:8000/blogs/${id}`)
    const [isDeleting, setIsDeleting] = useState(false)
    const history = useHistory()

    const handleClick = () => {
        setIsDeleting(true)
        fetch(`http://localhost:8000/blogs/${id}`, {
            method: 'DELETE'
        }).then(() => {
            setIsDeleting(false)
            console.log('blog deleted')
            history.push('/')
        })
    }

    return (
        <div className="blog-details">
            {isLoading && <div className="loading-screen"><div className="loader"></div></div>}
            {error && <div>{ error }</div>}
            {blog && (
                <article>
                    <h2>{ blog.title }</h2>
                    <p>Written by { blog.author }</p>
                    <hr />
                    <div className="blog-body">{ blog.body }</div>
                    { !isDeleting && <button className="delete-btn" onClick={handleClick}>Delete</button>}
                    { isDeleting && <button disabled onClick={handleClick}>Deleting blog...</button>}
                </article>
            )}
        </div>
    );
}
 
export default BlogDetails