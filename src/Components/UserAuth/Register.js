import ReactDOM from "react-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { activePages, registered } from "../ReduxStore/Slices/auth";
import { userRegister } from "../CrudOperations/PostOperation";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const navigate = useNavigate();

  const signupPageActive = useSelector((state) => state.auth.signupPageActive);

  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    if (signupPageActive) {
      dispatch(activePages({ login: true, signup: false }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (mail !== "" && pass !== "" && confirmPass !== "") {
      if (pass !== confirmPass) {
        alert("Confirm password not matching");
      } else {

        const response = await userRegister({mail, pass});
        console.log(response);

        if(response){

          

            dispatch(activePages({ login: false, signup: false }));
            dispatch(registered(true));


            navigate("/profile")
            

        }
        // Handle registration logic here
      }
    } else {
      alert("Please fill all fields!");
    }
  };

  useEffect(() => {
    document.body.classList.add("modal-open");
    return () => {
      document.body.classList.remove("modal-open");
    };
  }, []);

  const handleCloseButton = ()=>{
    dispatch(activePages({ login: false, signup: false }))
    navigate("/"); // Redirect to homepage or another appropriate route

  }

  return ReactDOM.createPortal(
    <>
      <div className="fixed z-20 inset-0 bg-opacity-90 bg-black text-opacity-90 shadow-inner h-screen w-screen mx-auto my-auto backdrop-blur-md">
        <div className="text-white h-full w-full flex justify-center items-center">
          <form
            className="rounded-md shadow-lg  border w-80 bg-black text-white p-2 px-5 flex flex-col justify-around gap-7 relative"
            onSubmit={handleSubmit}
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
            <h1 className="text-3xl text-center font-bold mb-5">Signup</h1>
            <div className="mx-auto flex flex-col gap-8 text-center">
              <div className="flex flex-col gap-2">
                <label className="font-bold text-4" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  className="p-2 text-black rounded"
                  type="email"
                  value={mail}
                  onChange={(e) => setMail(e.target.value.toLowerCase())}
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-bold text-4" htmlFor="password">
                  Password
                </label>
                <input
                  id="password"
                  className="p-2 text-black rounded"
                  type="password"
                  value={pass}
                  onChange={(e) => setPass(e.target.value)}
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-bold text-4" htmlFor="confirmPassword">
                  Confirm Password
                </label>
                <input
                  id="confirmPassword"
                  className="p-2 text-black rounded"
                  type="password"
                  value={confirmPass}
                  onChange={(e) => setConfirmPass(e.target.value)}
                  required
                />
              </div>
              <div className="flex justify-between flex-col gap-3">
                <button type="submit" className="border w-28 p-1 rounded-md hover:text-blue-500 mx-auto ">
                  Signup
                </button>
                <button
                  type="button"
                  className="p-4 mx-auto hover:text-blue-400"
                  onClick={handleLogin}
                >
                  Already have an account? Login here.
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>,
    document.getElementById("login")
  );
};

export default Register;


