import { Link } from "react-router-dom"


const User = ({ user }) => {
    const { id, name, email, phone } = user
    return (
        <div className="hover:-translate-x-1 hover:-translate-y-1 transition-all border-emerald-500 border-2 p-5 rounded-md shadow-lg text-center">
            <h1 className="text-2xl font-semibold">{name}</h1>
            <h1 className="my-2">Email: {email}</h1>
            <h1>Phone: {phone}</h1>
            <div className="mt-3 ">
                <Link className="bg-emerald-500 px-4 py-2 rounded-lg" to={`/user/${id}`}> Show Details</Link>
            </div>
        </div>
    )
}

export default User