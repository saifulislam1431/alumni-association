import { Link } from "react-router-dom";
import useBlogs from "../../../Hooks/useBlogs";

const News = () => {
    const { allBlogs } = useBlogs()
    return (
        <section className="my-28">
            <div className="text-center mb-14">
                <h1 className="text-5xl font-bold brandFont text-primary">Blog</h1>
            </div>

            <div className="px-5 lg:px-12 flex items-center justify-center gap-10 flex-col lg:flex-row">

                {
                    allBlogs?.slice(0, 3)?.map(blog => <div className="card w-96 glass" key={blog?._id}>
                        <figure><img src={blog?.thumbnails} alt="thumbnails!" className="w-full h-60" /></figure>
                        <div className="card-body">
                            <h2 className="card-title brandFont text-primary">{blog?.title}</h2>
                            <p className="font-bold">Posted By: <span className="text-primary">{blog?.author}</span></p>
                            <p className="text-sm font-semibold">{blog?.short_description}</p>
                            <Link to="/" className="card-actions justify-end">
                                <button className="btn btn-primary">Read now!</button>
                            </Link>
                        </div>
                    </div>)
                }
            </div>

        </section>
    );
};

export default News;