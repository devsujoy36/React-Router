import { useLoaderData } from "react-router-dom"

const UserDetails = () => {

    const user = useLoaderData();
    console.log(user);
    const { name, email, phone, username, website, address, company } = user;
    const { street, suite, city, zipcode, } = address;
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
            </div>
        </div>
    )
}

export default UserDetails