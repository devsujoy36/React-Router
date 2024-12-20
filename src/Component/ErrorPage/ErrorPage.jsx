import { useNavigate, useRouteError } from "react-router-dom"

const ErrorPage = () => {
  const error = useRouteError()
  console.log(error);
  const { status, statusText, data } = error;
  
  const navigate = useNavigate()
  const goBackHandler = () => {
      navigate(-1)
  }


  return (
    <div className="h-dvh flex justify-center items-center flex-col gap-5 ">
        <h1 className="md:text-7xl text-4xl font-bold text-red-500">{status}</h1>
        <p className="md:text-4xl text-xl font-semibold">Sorry, an unexpected error has occurred</p>
        <p className="md:text-2xl italic underline text-xl font-semibold">{data}</p>
        <p className="md:text-2xl text-lg font-semibold">Page {statusText}!!!</p>
        <button onClick={goBackHandler} className="bg-emerald-500 px-4 py-2 rounded-md text-white font-semibold active:scale-95 hover:bg-emerald-400 transition-all">GO Back</button>
    </div>
  )
}

export default ErrorPage