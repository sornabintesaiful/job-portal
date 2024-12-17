import React, { useContext, useState } from 'react';
import Lottie from 'lottie-react';
import lottieData from '../../assets/lottie.json'
import { FaEye, FaEyeSlash  } from 'react-icons/fa';
import AuthContext from '../../context/AuthContext';
 
const Register = () => {

  const { createUser } = useContext(AuthContext);

  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');


  const handleRegister = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    //  const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{6,}$/;  

    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{6,}$/;
    if (!passwordRegex.test(password)) {
      setErrorMessage(
        'At least one uppercase, one lowercase, one number, one special character'
      );
      return;
    };

    createUser(email, password)
      .then(res => {
      console.log(res.user)
      })
      .catch(error => {
      console.log(error.message)
      })
    
    
  // useEffect(() => {
  //   const usSubscribe = onAuthStateChanged(auth, currentUser => {
  //     setUser(currentUser);
  //     console.log('stateCapture', currentUser);
  //     setLoading(false);
  //   });
  //   return usSubscribe();
  // }, []);
  }
    return (
      <div>
        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left w-96">
              <Lottie animationData={lottieData}></Lottie>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <h1 className="ml-9 mt-5 text-5xl font-bold">Register now!</h1>
              <form onSubmit={handleRegister} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control relative">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="btn btn-xs absolute right-2 top-11"
                  >
                    {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                  </button>
                  {errorMessage && (
                    <p className="text-red-500 ml-7 mb-7">{errorMessage} </p>
                  )}
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Register </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Register;