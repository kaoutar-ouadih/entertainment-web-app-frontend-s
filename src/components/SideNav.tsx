import {  NavLink, Link, useNavigate } from "react-router-dom"
import { useState} from "react";

interface SideNav{
  setBookmarkedItems: (numbers: number[])=>void;
}

const SideNav: React.FC<SideNav>= ({setBookmarkedItems}) => {
  const [isMenuClicked, setMenuClicked] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="relative bg-semiDarkBlue w-full lg:h-screen rounded-xl p-4 flex  lg:flex-col  items-center gap-6 md:gap-16 justify-between lg:justify-start">
      <svg width="33" height="27" xmlns="http://www.w3.org/2000/svg"><path d="m26.463.408 3.2 6.4h-4.8l-3.2-6.4h-3.2l3.2 6.4h-4.8l-3.2-6.4h-3.2l3.2 6.4h-4.8l-3.2-6.4h-1.6a3.186 3.186 0 0 0-3.184 3.2l-.016 19.2a3.2 3.2 0 0 0 3.2 3.2h25.6a3.2 3.2 0 0 0 3.2-3.2V.408h-6.4Z" fill="#FC4747"/></svg>
      <div className="hidden  sm:flex gap-6 lg:flex-col sm:gap-10">
        <NavLink to="/" className="group">
            { ({isActive}) => (
                <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 0H1C.4 0 0 .4 0 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1Zm0 11H1c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1ZM19 0h-7c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1Zm0 11h-7c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1Z"
                    className={`group-hover:fill-red   ${isActive ? 'fill-white' : 'fill-[#5A698F]'}`}/></svg>
            )}
        </NavLink>
        <NavLink to="/movies" className="group">
            { ({isActive}) => (
                <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M16.956 0H3.044A3.044 3.044 0 0 0 0 3.044v13.912A3.044 3.044 0 0 0 3.044 20h13.912A3.044 3.044 0 0 0 20 16.956V3.044A3.044 3.044 0 0 0 16.956 0ZM4 9H2V7h2v2Zm-2 2h2v2H2v-2Zm16-2h-2V7h2v2Zm-2 2h2v2h-2v-2Zm2-8.26V4h-2V2h1.26a.74.74 0 0 1 .74.74ZM2.74 2H4v2H2V2.74A.74.74 0 0 1 2.74 2ZM2 17.26V16h2v2H2.74a.74.74 0 0 1-.74-.74Zm16 0a.74.74 0 0 1-.74.74H16v-2h2v1.26Z" fill="#5A698F" 
                className={`group-hover:fill-red   ${isActive ? 'fill-white' : 'fill-[#5A698F]'}`}/>
                </svg>
            )}
        </NavLink>
        <NavLink to="/tv-series" className="group">
            {   ({isActive}) => (
                <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 4.481H9.08l2.7-3.278L10.22 0 7 3.909 3.78.029 2.22 1.203l2.7 3.278H0V20h20V4.481Zm-8 13.58H2V6.42h10v11.64Zm5-3.88h-2v-1.94h2v1.94Zm0-3.88h-2V8.36h2v1.94Z" fill="#5A698F" 
                className={`group-hover:fill-red   ${isActive ? 'fill-white' : 'fill-[#5A698F]'}`}/></svg>
            )}
        </NavLink>
        <NavLink to="/bookmarked-movies" className="group">
            {   ({isActive}) => (
                <svg width="17" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M15.387 0c.202 0 .396.04.581.119.291.115.522.295.694.542.172.247.258.52.258.82v17.038c0 .3-.086.573-.258.82a1.49 1.49 0 0 1-.694.542 1.49 1.49 0 0 1-.581.106c-.423 0-.79-.141-1.098-.423L8.46 13.959l-5.83 5.605c-.317.29-.682.436-1.097.436-.202 0-.396-.04-.581-.119a1.49 1.49 0 0 1-.694-.542A1.402 1.402 0 0 1 0 18.52V1.481c0-.3.086-.573.258-.82A1.49 1.49 0 0 1 .952.119C1.137.039 1.33 0 1.533 0h13.854Z" fill="#5A698F" 
                className={`group-hover:fill-red   ${isActive ? 'fill-white' : 'fill-[#5A698F]'}`}/></svg>
            )}
        </NavLink>
      </div>
      <div className="flex items-center gap-10 mt-auto">
        {!localStorage.getItem("username")  &&  <div className="text-white mt-auto">
          <button onClick={()=> navigate("/login")} className="bg-[#5A698F] text-md py-1 px-2 font-extralight text-white border-none rounded-md mb-0 lg:mb-2 hover:bg-red hover:text-white transition duration-300">Login</button>
        </div>}
        {localStorage.getItem("username") && <div className="flex gap-6 lg:gap-0 lg:flex-col items-center">
          <div className="flex gap-2 lg:flex-col lg:gap-0 items-center">
            <Link to={""} >
            <svg className=" border border-white rounded-full w-11 h-11"  xmlns="http://www.w3.org/2000/svg" height="10" width="8" viewBox="0 0 448 512"><path fill="#5A698F" d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"/></svg>
            </Link>
            <span className="text-white text-md font-light mt-2 overflow-hidden text-ellipsis w-[70%]">{localStorage.getItem("username")}</span>
          </div>
          <button onClick={()=>{localStorage.removeItem("jwtToken");
                                localStorage.removeItem("username");
                                localStorage.removeItem("bookmarkedMovies");
                                localStorage.removeItem("userId");
                                setBookmarkedItems([]);
                                navigate("/");
          }} className="bg-[#5A698F] text-md py-1 px-2 font-extralight text-white border-none rounded-md mt-6 mb-2 hover:bg-red hover:text-white transition duration-300">Logout</button>
        </div>}

        {/* nav for mobile */}
        <svg onClick={()=>setMenuClicked(!isMenuClicked)} className=" sm:hidden mt-3" xmlns="http://www.w3.org/2000/svg" height="34" width="32.25" viewBox="0 0 448 512"><path fill="#5A698F" d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/></svg>
        {isMenuClicked && <div className="absolute flex-col sm:hidden p-6 rounded-md bg-semiDarkBlue right-4 w-[120px] z-10 top-[102px]">
          <NavLink to="/" className="group block w-6 mx-auto mb-4">
              { ({isActive}) => (
                  <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 0H1C.4 0 0 .4 0 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1Zm0 11H1c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1ZM19 0h-7c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1Zm0 11h-7c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1Z"
                      className={`group-hover:fill-red   ${isActive ? 'fill-white' : 'fill-[#5A698F]'}`}/></svg>
              )}
          </NavLink>
          <NavLink to="/movies" className="group block w-6 mx-auto mb-4">
              { ({isActive}) => (
                  <svg  width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M16.956 0H3.044A3.044 3.044 0 0 0 0 3.044v13.912A3.044 3.044 0 0 0 3.044 20h13.912A3.044 3.044 0 0 0 20 16.956V3.044A3.044 3.044 0 0 0 16.956 0ZM4 9H2V7h2v2Zm-2 2h2v2H2v-2Zm16-2h-2V7h2v2Zm-2 2h2v2h-2v-2Zm2-8.26V4h-2V2h1.26a.74.74 0 0 1 .74.74ZM2.74 2H4v2H2V2.74A.74.74 0 0 1 2.74 2ZM2 17.26V16h2v2H2.74a.74.74 0 0 1-.74-.74Zm16 0a.74.74 0 0 1-.74.74H16v-2h2v1.26Z" fill="#5A698F" 
                  className={`group-hover:fill-red   ${isActive ? 'fill-white' : 'fill-[#5A698F]'}`}/>
                  </svg>
              )}
          </NavLink>
          <NavLink to="/tv-series" className="group block w-6 mx-auto mb-4">
              {   ({isActive}) => (
                  <svg  width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 4.481H9.08l2.7-3.278L10.22 0 7 3.909 3.78.029 2.22 1.203l2.7 3.278H0V20h20V4.481Zm-8 13.58H2V6.42h10v11.64Zm5-3.88h-2v-1.94h2v1.94Zm0-3.88h-2V8.36h2v1.94Z" fill="#5A698F" 
                  className={`group-hover:fill-red   ${isActive ? 'fill-white' : 'fill-[#5A698F]'}`}/></svg>
              )}
          </NavLink>
          <NavLink to="/bookmarked-movies" className="group block w-6 mx-auto">
              {   ({isActive}) => (
                  <svg  width="17" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M15.387 0c.202 0 .396.04.581.119.291.115.522.295.694.542.172.247.258.52.258.82v17.038c0 .3-.086.573-.258.82a1.49 1.49 0 0 1-.694.542 1.49 1.49 0 0 1-.581.106c-.423 0-.79-.141-1.098-.423L8.46 13.959l-5.83 5.605c-.317.29-.682.436-1.097.436-.202 0-.396-.04-.581-.119a1.49 1.49 0 0 1-.694-.542A1.402 1.402 0 0 1 0 18.52V1.481c0-.3.086-.573.258-.82A1.49 1.49 0 0 1 .952.119C1.137.039 1.33 0 1.533 0h13.854Z" fill="#5A698F" 
                  className={`group-hover:fill-red   ${isActive ? 'fill-white' : 'fill-[#5A698F]'}`}/></svg>
              )}
          </NavLink>
        </div>}
      </div>
      
    </div>
  )
}

export default SideNav
