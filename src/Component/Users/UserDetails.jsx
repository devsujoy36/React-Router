import { useLoaderData, useNavigate } from "react-router-dom"

const UserDetails = () => {

    const user = useLoaderData();
    const { name, email, phone, username, website, address, company } = user;
    const { street, suite, city, zipcode, } = address;

    const navigate = useNavigate()
    const goBackHandler = () => {
        navigate(-1)
    }
   
    
    return (
        <div className="flex justify-center items-center m-5">
            <div className=" p-5 rounded-md ">
                <h1 className="text-2xl font-bold">{name}</h1>
                <div className="flex flex-col gap-3 m-5">
                    <h1 className=""><span className="font-semibold">UserName:</span> {username}</h1>
                    <h1 className=""><span className="font-semibold">Company:</span> {company.name}</h1>
                    <h1 className=""><span className="font-semibold">Email:</span> {email}</h1>
                    <h1><span className="font-semibold">Phone:</span> {phone}</h1>
                    <div>
                        <h1><span className="font-semibold">Address:</span></h1>
                        <div className="ml-10">
                            <h1 className="">City: {city}</h1>
                            <h1 className="">Street: {street}</h1>
                            <h1 className="">Suite: {suite}</h1>
                            <h1 className="">ZipCode: {zipcode}</h1>
                        </div>
                    </div>
                    <a href="/" className=""><span className="font-semibold">Website:</span> www.{website}</a>
                </div>
                <div className="">
                    <button onClick={goBackHandler} className="float-end bg-emerald-500 px-4 py-2 rounded-md text-white font-semibold active:scale-95 hover:bg-emerald-400 transition-all" >Go Back</button>

                </div>
            </div>
        </div>
    )
}

export default UserDetails