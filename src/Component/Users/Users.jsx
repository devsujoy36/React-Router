import { useLoaderData } from "react-router-dom"
import User from "./User";

const Users = () => {
    const users = useLoaderData();
    return (
        <div className="flex justify-center items-center flex-col my-5 max-w-screen-2xl mx-auto">
            <h1 className='text-4xl font-semibold cursor-pointer'>Users.jsx</h1>
            <div className="grid grid-cols-1 md:grid-cols-4  gap-5 my-5">
                {
                    users.map((user,idx)=><User key={idx} user={user}/>)
                }
            </div>
        </div>
    )
}

export default Users