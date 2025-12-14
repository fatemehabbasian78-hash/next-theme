
async function getBlogs() {
    const res = await fetch("http://localhost:4000/blogs", {
        cache: "no-store"
    });

    return res.json();
}


export default async function Blog() {
    const blogs = await getBlogs();
    return <>
        <div className="flex justify-center gap-3.5 mt-5 w-11/12 mx-auto">
            {blogs.map((blog) => (
                <div key={blog.id} className="border rounded-md p-4 bg-pink-300 shadow-emerald-400 shadow-md hover:bg-green-200">
                    <h2>{blog.title}</h2>
                    <hr />
                    <p className="mt-3 line-clamp-1">{blog.description}</p>
                </div>
            ))}
        </div>
    </>
}