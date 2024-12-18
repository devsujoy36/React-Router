/* eslint-disable react/prop-types */

import { Link, useNavigate } from "react-router-dom";


const Post = ({ post }) => {
    console.log(post);
    const { id, title, body } = post;

    const navigate = useNavigate();
    const handleShowDetails = () => {
        navigate(`/post/${id}`)
    }

    return (
        <div className="border-black border-2 grid gap-2 rounded-xl p-5 hover:-translate-y-1 transition-all">
            <div className="bg-gray-300 rounded-xl h-56"></div>
            <h1 className="font-bold text-xl">{id}. <span className="">{title}</span> </h1>
            <h1>{body}</h1>
            <div className="my-2 flex  items-center justify-between gap-5">
                <div>
                    <Link to={`/post/${id}`} className="bg-emerald-500 px-4 py-2 rounded-md text-white font-semibold hover:scale-95 hover:bg-emerald-400">Post Details</Link>
                </div>
                <div>
                    <button onClick={handleShowDetails} className="bg-emerald-500 px-4 py-2 rounded-md text-white font-semibold hover:scale-95 hover:bg-emerald-400">Show Details</button>
                </div>

            </div>
        </div>
    )
}

export default Post



// react hook complete by me
// useState()
// useEffect()
// useLoaderData()
// useNavigate()
