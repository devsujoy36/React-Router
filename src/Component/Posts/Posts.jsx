import { useLoaderData } from "react-router-dom"
import Post from "./Post";

const Posts = () => {
  const posts = useLoaderData()
  return (
    <div className="flex justify-center items-center flex-col my-5 max-w-screen-2xl mx-auto">
            <h1 className='text-4xl font-semibold cursor-pointer'>Posts.jsx</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-10 my-5">
                {
                   posts.map((post, idx)=><Post post={post} key={idx}/>)
                }
            </div>
        </div>
  )
}

export default Posts