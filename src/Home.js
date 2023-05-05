import useFetch from "./hooks/useFetch"
import BlogPreview from "./BlogPreview"

export default function Home() {

    const { data: blogs, isLoading, error } = useFetch('http://localhost:8000/blogs')

    // ONLY DELETES FROM THE STATE LOCALLY
    
    // const handleDelete = (id) => {
    //     const new_blogs = blogs.filter((blog) => blog.id !== id)
    //     setBlogs(new_blogs)
    // }

    return (
        <div className="home">
            {error && <div>{ error }</div>}
            {isLoading && <div className="loading-screen"><div className="loader"></div></div>}
            {blogs && <BlogPreview blogs={blogs} title="All blogs" />}
            {/* <BlogPreview blogs={blogs.filter((blog) => blog.author == 'mario')} title="Mario's blogs"/> */}
        </div>
    )
}