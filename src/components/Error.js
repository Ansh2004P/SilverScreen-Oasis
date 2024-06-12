import { useRouteError } from "react-router-dom";
import { ERROR_URL, LOGO } from "../utils/constants";
import { useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  // console.log(err);

  const handleOnClick =() =>{
    if(user){
      navigate("/browse");
    }else{
      navigate("/");
    }
  };

  return (
    <div className="w-full h-full">
      <div className="h-20 w-full absolute bg-gradient-to-b from-black flex flex-row">
        <img
          className="h-20 w-1/5 object-contain p-2 m-4"
          src={LOGO}
          alt="Logo"
        />
      </div>
      <img
        className="h-full w-full absolute -z-20"
        src={ERROR_URL}
        alt="Background"
      />
      <div className="h-screen w-screen absolute bg-gradient-to-b from-black -z-10">
        <div className="h-full w-full flex flex-col justify-center items-center">
          <h1 className="text-white text-7xl font-bold">Lost Your Way?</h1>
          <div className="flex flex-wrap w-4/6 justify-center my-12">
            <h2 className="text-white text-4xl font-semibold text-center">
              Sorry, we can't find that page. You'll find lots to explore on the
              home page.
            </h2>
          </div>
          <button onClick={handleOnClick} className="bg-white text-black font-bold text-lg p-2 rounded-lg w-1/12 h-[50px] shadow-md shadow-black">
            Go Home </button>
        </div>
      </div>
    </div>
  );
};

export default Error;
