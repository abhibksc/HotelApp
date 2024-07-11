import ReactDOM from "react-dom";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { activePages, signIn } from "../ReduxStore/Slices/auth";
import { userLogin } from "../CrudOperations/PostOperation";
import { GetUserData } from "../CrudOperations/GetOperation";

const Login = () => {
  const [Email, setEmail] = useState("");
  const [pass, setPass] = useState("");


  const dispatch = useDispatch();
  const navigate = useNavigate();



  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(activePages({ login: false, signup: true }));
  };

  const handleForm = async (e) => {
    e.preventDefault();
    // Handle form submission

    if(Email && pass){

      const response = await userLogin({mail : Email, pass});
      console.log(response);

      if(response){

        dispatch(activePages({ login: false, signup: false }));
        // dispatch(signIn({

        //   token  
        //   // userId  
        //   email
        //   name
        //   phone


        // }));



    }

    }


  };

  useEffect(() => {
    document.body.classList.add("modal-open");
    return () => {
      document.body.classList.remove("modal-open");
    };
  }, []);

  return ReactDOM.createPortal(
    <>
      <div className="fixed z-20 inset-0 bg-opacity-90 bg-black text-opacity-90 shadow-inner h-screen w-screen mx-auto my-auto backdrop-blur-md">
        <div className="text-white h-full w-full flex justify-center items-center">
          <form
            className="rounded-md shadow-lg border w-80 bg-black text-white p-3 flex flex-col justify-around gap-7 relative"
            onSubmit={handleForm}
          >
            <button
              type="button"
              className="absolute top-2 right-2 text-white"
              onClick={() => {
                dispatch(activePages(
                  { login: false, signup: false }))

                  navigate("/");
                
                } }
            >
              &times;
            </button>
            <h1 className="text-3xl text-center font-bold mb-5">Login</h1>
            <div className="mx-auto flex flex-col gap-10 text-center">
              <div className="flex flex-col gap-3">
                <label className="font-bold text-4" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  className="p-2 text-gray-300 rounded"
                  type="email"
                  value={Email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="flex flex-col gap-3">
                <label className="font-bold text-4" htmlFor="password">
                  Password
                </label>
                <input
                  id="password"
                  className="p-2 rounded text-gray-300"
                  type="password"
                  value={pass}
                  onChange={(e) => setPass(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="border w-28 p-1 rounded-md hover:text-blue-500 mx-auto ">
                  Login
                </button>
              <div className="flex flex-col">
                <button className="p-3 mx-auto hover:text-blue-400">
                  <Link to="/forget">Forget Password?</Link>
                </button>
                <button
                  className="hover:text-blue-400"
                  onClick={handleLogin}
                >
                  Don't have an account? Sign up here.
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>,
    document.getElementById("root")
  );
};

export default Login;
