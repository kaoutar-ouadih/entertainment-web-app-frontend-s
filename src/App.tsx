import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'
import HomePage from './pages/HomePage'
import SideNav from './components/SideNav'
import SearchBar from './components/SearchBar'
import MoviesPage from './pages/MoviesPage'
import TvSeriesPages from './pages/TvSeriesPages'
import { useEffect, useState } from 'react'
import BookMarkedPage from './pages/BookMarkedPage'
import axios from 'axios';
import { Movie } from './Movie'




function App() {
  const location = useLocation();
  const hideSidebarAndSearch = location.pathname === '/login' || location.pathname === '/sign-up';
  const [searchKeyword, setSearchKeyword] = useState('');
  const [data, setData] = useState<Movie[]>([]);
  const [copyOfData, setCopyOfData] = useState<Movie[]>([]);
  const token = localStorage.getItem("jwtToken");
  const [bookmarkedItems, setBookmarkedItems] = useState<number[]>([]);
  
  useEffect(()=>{
    axios.get("https://entertainment-web-app-spring-security.onrender.com/movies/all",
    )
      .then(result=> {
        setData(result.data);
        setCopyOfData(result.data);
      }
      )
      .catch(error=> console.log('error', error))
    }, [])


  useEffect(()=>{
    search(searchKeyword);
  }, [searchKeyword])

  function search(term: string){
    const result = data.filter((item)=> item.title.toLocaleLowerCase().includes(term.toLocaleLowerCase()));
    setCopyOfData(result);
  }


  return (
    <>
      { <div className="flex flex-col lg:flex-row w-full min-h-screen bg-darkBlue">
        {!hideSidebarAndSearch && (
          <div className="w-full lg:w-[150px] p-7 pr-0">
            <SideNav setBookmarkedItems={setBookmarkedItems} />
          </div>
        )}
        <div className="flex-1 overflow-x-hidden" >
          {!hideSidebarAndSearch && <SearchBar searchKeyword={searchKeyword} setSearchKeyword={setSearchKeyword}/>}
          <Routes>
            <Route path='/login' element={<LoginPage/>}></Route>
            <Route path='/sign-up' element={<SignUpPage/>}></Route>
            <Route path='/' element={<HomePage copyOfData={copyOfData} data={data} bookmarkedItems={bookmarkedItems} setBookmarkedItems={setBookmarkedItems}/>} ></Route> 
            <Route path='/movies' element={<MoviesPage copyOfData={copyOfData} bookmarkedItems={bookmarkedItems} setBookmarkedItems={setBookmarkedItems}/>}></Route>
            <Route path='/tv-series' element={<TvSeriesPages copyOfData={copyOfData} bookmarkedItems={bookmarkedItems} setBookmarkedItems={setBookmarkedItems}/>}></Route>
            <Route path='/bookmarked-movies' element={token? <BookMarkedPage bookmarkedItems={bookmarkedItems} setBookmarkedItems={setBookmarkedItems} /> : <Navigate to={"/login"}/>}></Route>
          </Routes>    
        </div>
      </div> }  
      </>
  )
}

export default function AppWrapper() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
