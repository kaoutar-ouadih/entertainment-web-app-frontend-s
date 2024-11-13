import axios from "axios";
import { FormEvent, useState } from "react";
import { Link } from "react-router-dom"


const SignUpPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isSubmitBtnClicked, setIsSubmitBtnClicked] = useState(false);
  const emailPattern = /^([a-z\d.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
  

  function handleSubmit(e : FormEvent){
    e.preventDefault();
    setIsSubmitBtnClicked(true);

    if(emailPattern.test(email) && password.length >= 8 && confirmPassword === password){
      // send data to the backend here after validation
      axios.post("http://localhost:8081/users/register", {username: email, password})
      .then(res=>{
        console.log(res.data);
      })
      // reset the form after submition
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setIsSubmitBtnClicked(false);
    }
  }


  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-darkBlue text-white">
        <svg className="mb-20" width="33" height="27" xmlns="http://www.w3.org/2000/svg"><path d="m26.463.408 3.2 6.4h-4.8l-3.2-6.4h-3.2l3.2 6.4h-4.8l-3.2-6.4h-3.2l3.2 6.4h-4.8l-3.2-6.4h-1.6a3.186 3.186 0 0 0-3.184 3.2l-.016 19.2a3.2 3.2 0 0 0 3.2 3.2h25.6a3.2 3.2 0 0 0 3.2-3.2V.408h-6.4Z" fill="#FC4747"/></svg>
        <form onSubmit={(e)=>handleSubmit(e)} className="bg-semiDarkBlue rounded-2xl p-8 w-[430px]">
          <h1 className="text-3xl font-light mb-5">Sign Up</h1>
          {/* email */}
          <div className="relative">
            <input type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e)=> setEmail(e.target.value)} 
              placeholder="Email address" 
              className="block bg-transparent font-light p-4 mt-2 border-b-[1.4px] border-b-greyishBlue w-full outline-none"/>
            {!email && isSubmitBtnClicked && <span className="text-red font-light text-sm absolute right-0 top-[21px]">Can't be empty</span>}
            {email && !emailPattern.test(email) && isSubmitBtnClicked && <span className="text-red font-light text-sm absolute right-0 top-[21px]">Email not valid</span>}
          </div>
          {/* passsword */}
          <div className="relative">
            <input type="password" 
              name="password"
              id="password"
              value={password}
              onChange={(e)=> setPassword(e.target.value)}
              placeholder="Password" 
              className="block bg-transparent font-light p-4 mt-2 border-b-[1.4px] border-b-greyishBlue w-full outline-none" />
            {!password && isSubmitBtnClicked && <span className="text-red font-light text-sm absolute right-0 top-[21px]">Can't be empty</span>}
            {password && !(password.length >= 8) && isSubmitBtnClicked &&  <span className="text-red font-light text-sm absolute right-0 top-[21px]">Min length 8</span>}
          </div>
          {/* confirm password */}
          <div className="relative">
            <input type="password"
              name="confirmPassword"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e)=> setConfirmPassword(e.target.value)} 
              placeholder="Repeat password" 
              className="block bg-transparent font-light p-4 mt-2 border-b-[1.4px] border-b-greyishBlue w-full outline-none" />
            {!confirmPassword && isSubmitBtnClicked && <span className="text-red font-light text-sm absolute right-0 top-[21px]">Can't be empty</span>}
            {confirmPassword && confirmPassword !== password && <span className="text-red font-light text-sm absolute right-0 top-[21px]">Pasword doesn't match</span>}
          </div>
          <button type="submit" className="bg-red py-3.5 px-8 w-full font-extralight border-none rounded-md mt-11 mb-6 hover:bg-white hover:text-semiDarkBlue transition duration-300">Create an account</button>
          <p className="text-center font-light">Already have an account?  <Link to={"/login"} className="text-red ml-1"> Login</Link></p>
        </form>
    </div>
  )
}

export default SignUpPage
