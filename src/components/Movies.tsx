import axios from "axios";
import { Movie } from "../Movie";
import { useEffect} from "react";

interface MoviesProps {
  copyOfData: Movie[];
  bookmarkedItems : number[];
  setBookmarkedItems: (numbers: number[])=>void;
  }

const Movies: React.FC<MoviesProps> = ({copyOfData, bookmarkedItems, setBookmarkedItems}) => {

  useEffect(() => {
    const savedBookmarks = JSON.parse(localStorage.getItem("bookmarkedMovies") || "[]");
    setBookmarkedItems(savedBookmarks.map((movie: Movie) => movie.id));
  }, []);
 
  
  function addMovieToUser(userId: number, movieId: number){
     axios.post(`http://147.93.58.141:8081/users/${userId}/movies/${movieId}`, {},
      {headers: {
        'Authorization': `Bearer ${localStorage.getItem("jwtToken")}`
      }})
      .then(()=>{
        const bookmarkedMovies = JSON.parse(localStorage.getItem("bookmarkedMovies") || "[]");
        const updatedBookmarkedMovies = [...bookmarkedMovies, copyOfData.find(movie => movie.id === movieId)!];
        localStorage.setItem("bookmarkedMovies", JSON.stringify(updatedBookmarkedMovies));
        setBookmarkedItems(updatedBookmarkedMovies.map((movie: Movie)=> movie.id))
      })
      .catch((err) => {
        console.error("Error adding movie to user:", err);
      });
  }

  function isBookmarked(movieId: number): boolean{  
    const bookmarkedMovies: Movie[] = JSON.parse(localStorage.getItem("bookmarkedMovies") || "[]");
    return bookmarkedMovies.some((movie)=> movie.id == movieId);
  }

  function removeMovieFromBookmarkedList(userId: number, movieId: number) {
    axios.post(`http://147.93.58.141:8081/users/remove/${userId}/movies/${movieId}`, {},
      {headers: {
        'Authorization': `Bearer ${localStorage.getItem("jwtToken")}`
      }})
      .then(()=>{
        const bookmarkedMovies: Movie[] = JSON.parse(localStorage.getItem("bookmarkedMovies") || "[]");
        const updatedBookmarkedMovies = bookmarkedMovies.filter((movie) => movie.id !== movieId);
        console.log(updatedBookmarkedMovies);
        localStorage.setItem("bookmarkedMovies", JSON.stringify(updatedBookmarkedMovies));
        setBookmarkedItems(updatedBookmarkedMovies.map((movie: Movie)=> movie.id))
      })
  }

  function bookmark(movieId: number){
    const userId = localStorage.getItem("userId");
    if(userId && !isBookmarked(movieId)){
      addMovieToUser(+userId, movieId);
    }
    else if(userId && isBookmarked(movieId)){
      removeMovieFromBookmarkedList(+userId, movieId);
    }
  }

  return (
    <div className="px-7">
        <h1 className="text-white text-3xl font-extralight mb-7">Movies</h1>
      <div className="flex gap-7 flex-wrap justify-between">
        { copyOfData.map((item)=>(
        <div key={item.title} className="w-full min-w-[200px] sm:basis-[220px] lg:basis-[250px] mb-4">
            <div className="w-full rounded-md overflow-hidden relative mb-2 group/outer" >
                <img className="w-full" src={item.thumbnail_regular_large} alt="" />
                {/* bookMark */}
                <button onClick={()=>bookmark(item.id)} aria-label="bookmark" className="absolute top-4 right-4 w-9 h-9 rounded-full bg-darkBlue bg-opacity-40 flex justify-center items-center z-20 group/inner hover:bg-white">
                    <svg width="12" height="14" xmlns="http://www.w3.org/2000/svg"><path d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z" stroke="#FFF" strokeWidth="1.5" fill="none" className={`group-hover/inner:stroke-black group-hover/inner:fill-white ${bookmarkedItems.includes(item.id)? 'fill-white':'fill-none'} `}/></svg>
                </button>
                {/* play */}
                <div className=" justify-center items-center absolute top-0 lef-0 w-full h-full hidden group-hover/outer:flex transition duration-700 bg-darkBlue bg-opacity-50 cursor-pointer">
                    <button aria-labelledby={`play-${item.title}`} className="flex gap-3 items-center bg-white bg-opacity-30 w-[90px] p-1 rounded-full">
                        <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg"><path d="M15 0C6.713 0 0 6.713 0 15c0 8.288 6.713 15 15 15 8.288 0 15-6.712 15-15 0-8.287-6.712-15-15-15Zm-3 21V8l9 6.5-9 6.5Z" fill="#FFF"/></svg>
                        <span id={`play-${item.title}`} className="text-white font-light">Play</span>
                    </button>
                </div>
            </div>
            <div className="text-white">
                    <div className="flex gap-2 font-extralight items-center text-sm">
                        <span>{item.year} </span>
                        <svg width="3" height="3" viewBox="0 0 3 3" fill="none" xmlns="http://www.w3.org/2000/svg"><circle opacity="0.5" cx="1.5" cy="1.5" r="1.5" fill="white"/></svg>
                        <span className="flex gap-2 items-center"><svg width="12" height="12" xmlns="http://www.w3.org/2000/svg"><path d="M10.173 0H1.827A1.827 1.827 0 0 0 0 1.827v8.346C0 11.183.818 12 1.827 12h8.346A1.827 1.827 0 0 0 12 10.173V1.827A1.827 1.827 0 0 0 10.173 0ZM2.4 5.4H1.2V4.2h1.2v1.2ZM1.2 6.6h1.2v1.2H1.2V6.6Zm9.6-1.2H9.6V4.2h1.2v1.2ZM9.6 6.6h1.2v1.2H9.6V6.6Zm1.2-4.956V2.4H9.6V1.2h.756a.444.444 0 0 1 .444.444ZM1.644 1.2H2.4v1.2H1.2v-.756a.444.444 0 0 1 .444-.444ZM1.2 10.356V9.6h1.2v1.2h-.756a.444.444 0 0 1-.444-.444Zm9.6 0a.444.444 0 0 1-.444.444H9.6V9.6h1.2v.756Z" fill="#FFF" opacity=".75"/></svg>{item.category.name}</span>
                        <svg width="3" height="3" viewBox="0 0 3 3" fill="none" xmlns="http://www.w3.org/2000/svg"><circle opacity="0.5" cx="1.5" cy="1.5" r="1.5" fill="white"/></svg>
                        <span>{item.rating}</span>
                    </div>
                    <h2 className="text-xl tracking-wide capitalize">{item.title}</h2>
            </div>
        </div>))}
      </div>  
    </div>
  )
}

export default Movies


