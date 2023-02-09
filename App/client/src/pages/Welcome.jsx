import { useNavigate } from "react-router-dom";

const Welcome = () => {
    const navigate = useNavigate();
    const redirectLogin = () => {
        navigate('/login')
    }
  return (
    <div className="w-full h-full absolute">
      <div className="h-full flex justify-center items-center flex-col">
      <h1 className="text-center text-4xl font semibold text-white">You Are Successfully Registered ..</h1>
      <button onClick={redirectLogin} className="bg-red-600 py-2 px-6 my-6 rounded text-white">Login Now</button>
      </div>
    </div>
  )
}

export default Welcome
