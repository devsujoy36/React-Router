const ErrorPage = () => {
  return (
    <div className="h-dvh flex justify-center items-center flex-col gap-5 ">
        <h1 className="md:text-6x text-4xl font-bold text-red-500">Opps!!!</h1>
        <p className="md:text-4xl text-xl font-semibold">Sorry, an unexpected error has occurred</p>
        <p className="md:text-2xl text-lg font-semibold">Page Not Found!!!</p>
    </div>
  )
}

export default ErrorPage