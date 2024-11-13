import axios from "axios";
import {FormEvent, useState } from "react"
import { Link, useNavigate } from "react-router-dom"




const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitBtnClicked, setIsSubmitBtnClicked] = useState(false);
  const emailPattern = /^([a-z\d.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();
 


  function handleSubmit(e : FormEvent){
    e.preventDefault();
    setIsSubmitBtnClicked(true);
    setErrorMsg('');

    if(emailPattern.test(email) && password.length >= 8){
      // send data to the backend here
      axios.post("http://localhost:8081/users/login", {username: email, password})
        .then(res=>{
          if(res.data === "username or password are invalid" && res.status ===200){
            setErrorMsg("Email or Password are invalid");
          }
          else if(res.status === 200){
            localStorage.setItem("jwtToken", res.data);
            loadProfileInfos();
            // loadBookmarkedMovies();
          }
        }).catch(()=>{
          setErrorMsg("An error occurred. Please try again.");
        });
    }
  }

  function loadProfileInfos(){
    axios.get("http://localhost:8081/users/getMyProfile",
      {headers: {
        'Authorization': `Bearer ${localStorage.getItem("jwtToken")}`
      }}
    )
    .then((res)=>{
      localStorage.setItem("username", res.data.username);
      localStorage.setItem("userId", res.data.id);
      loadBookmarkedMovies();
      navigate("/");
    })
  }

  function loadBookmarkedMovies(){
    const userId = localStorage.getItem("userId");
    console.log(userId);
    if(userId){
      axios.get(`http://localhost:8081/users/${+userId}/movies`,
        {
          headers:{
            'Authorization': `Bearer ${localStorage.getItem("jwtToken")}`
          }
        }
      )
      .then((res)=>{
        const movies = res.data;
        localStorage.setItem("bookmarkedMovies", JSON.stringify(movies));
      }
      )
      .catch((err)=> console.log(err));
    }
  }

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-darkBlue text-white">
        <svg className="mb-20" width="33" height="27" xmlns="http://www.w3.org/2000/svg"><path d="m26.463.408 3.2 6.4h-4.8l-3.2-6.4h-3.2l3.2 6.4h-4.8l-3.2-6.4h-3.2l3.2 6.4h-4.8l-3.2-6.4h-1.6a3.186 3.186 0 0 0-3.184 3.2l-.016 19.2a3.2 3.2 0 0 0 3.2 3.2h25.6a3.2 3.2 0 0 0 3.2-3.2V.408h-6.4Z" fill="#FC4747"/></svg>
        <form onSubmit={(e)=> handleSubmit(e)} className="bg-semiDarkBlue rounded-2xl p-8 w-[430px]" noValidate>
          <h1 className="text-3xl font-light mb-5">Login</h1>
          {/* email */}
          <div className="relative">
            <input type="email" placeholder="Email address" 
                  name="email" 
                  id="email"
                  value={email} 
                  onChange={(e)=>setEmail(e.target.value)}
                  required 
                  className="block bg-transparent font-light p-4 mt-2 border-b-[1.4px] border-b-greyishBlue w-full outline-none"/>
          {!email && isSubmitBtnClicked && <span className="text-red font-light text-sm absolute right-0 top-[21px]">Can't be empty</span>}
          {email && !emailPattern.test(email) && isSubmitBtnClicked && <span className="text-red font-light text-sm absolute right-0 top-[21px]">Email not valid</span>}
          </div>
          {/* password */}
          <div className="relative">
            <input type="password" placeholder="Password" 
                  name="password" 
                  id="password"
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}
                  required 
                  className="block bg-transparent font-light p-4 mt-2 border-b-[1.4px] border-b-greyishBlue w-full outline-none" />
          {!password && isSubmitBtnClicked &&  <span className="text-red font-light text-sm absolute right-0 top-[21px]">Can't be empty</span>}
          {password && !(password.length >= 8) && isSubmitBtnClicked &&  <span className="text-red font-light text-sm absolute right-0 top-[21px]">Min length 8</span>}
          </div>
          <div className="mb-6">
            <button type="submit" className="bg-red py-3.5 px-8 w-full font-extralight mb-3 border-none rounded-md mt-11 hover:bg-white hover:text-semiDarkBlue transition duration-300">Login to your account</button>
            {errorMsg &&  <span className="text-red font-light text-sm">{errorMsg}</span>}
          </div>
          <p className="text-center font-light">Don't have an account?  <Link to={"/sign-up"} className="text-red ml-1"> Sign Up</Link></p>
        </form>
    </div>
  )
}

export default LoginPage
