import { useLoaderData } from "react-router-dom"

const PostDetails = () => {
    const post = useLoaderData();
    const { id, title, body } = post;
    return (
        <div className="max-w-screen-2xl mx-auto">
            <div className="md:w-4/12 md:mx-auto border-emerald-600 border my-5 mx-5 grid gap-2 rounded-lg p-5 ">
                <div className="bg-gray-300 rounded-xl h-[300px]"></div>
                <h1 className="font-bold text-2xl">{id}. <span className="">{title}</span> </h1>
                <h1 className="">{body}</h1>

            </div>
        </div>
    )
}

export default PostDetails