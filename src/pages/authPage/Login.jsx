import { Form } from "../../components/molecules";
import { handleSubmitData, loginPattern } from "../../pattern";
import LoginImg from "../../assets/login.png";
import { loginService } from "../../service/authService,";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="px-10 md:py-5 h-screen flex justify-center items-center bg-gray-200">
      <div className="h-[600px] w-[1000px] flex items-center justify-center shadow-xl rounded-md ">
        <div className="flex-1 hidden md:flex justify-center items-center bg-blue-800 h-full ">
          <img src={LoginImg} alt="login img" className="w-96" />
        </div>

        <div className="flex-1 border flex justify-center items-center border-gray-300 py-10 px-5 shadow-xl bg-white h-full">
          <div className="w-96">
            <div className="text-center mb-7">
              <h2 className="text-2xl font-semibold text-center">Welcome</h2>
              <span className="text-gray-400 mt-4 text-xs">
                Please login first
              </span>
            </div>
            <Form
              configInput={loginPattern}
              buttonText={"Sign In"}
              handleSubmitData={(data) =>
                handleSubmitData(data, loginService, navigate)
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
