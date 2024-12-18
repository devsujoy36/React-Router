import { useLoaderData } from "react-router-dom"
import User from "../User/User";

const Users = () => {
    const users = useLoaderData();
    console.log(users);
    return (
        <div className="flex justify-center items-center flex-col my-5">
            <h1 className='text-4xl font-semibold cursor-pointer'>Users.jsx</h1>
            <div className="grid grid-cols-3 gap-5 my-5">
                {
                    users.map((user,idx)=><User key={idx} user={user}/>)
                }
            </div>
        </div>
    )
}

export default Users