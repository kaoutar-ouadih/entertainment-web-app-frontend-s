import { Movie } from "../Movie"

interface TrendingProps{
    data: Movie[];
}


const Trending: React.FC<TrendingProps> = ({data}) => {
  return (
    <div className="mb-10 pl-7">
      <h1 className="text-white text-3xl font-extralight mb-5">Trending</h1>
      <div className="flex gap-7">
        <div className="flex gap-7 animate-scrolling">
            {/* 1 */}
            { data.map((item)=>
            <div key={item.title} className="min-w-[420px] rounded-md overflow-hidden relative group/outer ">
                <img className="w-full" src={item.thumbnail_trending_large} alt="thumbnail" />
                {/* bookmark */}
                <button aria-label="bookmark" className="absolute top-4 right-6 w-9 h-9 rounded-full bg-darkBlue bg-opacity-40 flex justify-center items-center z-10 group/inner hover:bg-white">
                    <svg width="12" height="14" xmlns="http://www.w3.org/2000/svg"><path d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z" stroke="#FFF" strokeWidth="1.5" fill="none"  className={`group-hover/inner:stroke-black group-hover/inner:fill-white ${item.bookmarked? 'fill-white':'fill-none'} `}/></svg>
                </button>
                <div className="absolute text-white bottom-5 left-5">
                    <div className="flex gap-2 font-extralight items-center">
                        <span>{item.year} </span>
                        <svg width="3" height="3" viewBox="0 0 3 3" fill="none" xmlns="http://www.w3.org/2000/svg"><circle opacity="0.5" cx="1.5" cy="1.5" r="1.5" fill="white"/></svg>
                        <span className="flex gap-2 items-center"><svg width="12" height="12" xmlns="http://www.w3.org/2000/svg"><path d="M10.173 0H1.827A1.827 1.827 0 0 0 0 1.827v8.346C0 11.183.818 12 1.827 12h8.346A1.827 1.827 0 0 0 12 10.173V1.827A1.827 1.827 0 0 0 10.173 0ZM2.4 5.4H1.2V4.2h1.2v1.2ZM1.2 6.6h1.2v1.2H1.2V6.6Zm9.6-1.2H9.6V4.2h1.2v1.2ZM9.6 6.6h1.2v1.2H9.6V6.6Zm1.2-4.956V2.4H9.6V1.2h.756a.444.444 0 0 1 .444.444ZM1.644 1.2H2.4v1.2H1.2v-.756a.444.444 0 0 1 .444-.444ZM1.2 10.356V9.6h1.2v1.2h-.756a.444.444 0 0 1-.444-.444Zm9.6 0a.444.444 0 0 1-.444.444H9.6V9.6h1.2v.756Z" fill="#FFF" opacity=".75"/></svg> {item.category.name}</span>
                        <svg width="3" height="3" viewBox="0 0 3 3" fill="none" xmlns="http://www.w3.org/2000/svg"><circle opacity="0.5" cx="1.5" cy="1.5" r="1.5" fill="white"/></svg>
                        <span>{item.rating}</span>
                    </div>
                    <h2 className="text-2xl tracking-wide">{item.title}</h2>
                </div>
                {/* play */}
                <div className=" justify-center items-center absolute top-0 lef-0 w-full h-full hidden group-hover/outer:flex transition duration-700 bg-darkBlue bg-opacity-50 cursor-pointer">
                    <button aria-labelledby="play" className="flex gap-3 items-center bg-white bg-opacity-30 w-[110px] p-2 rounded-full">
                        <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg"><path d="M15 0C6.713 0 0 6.713 0 15c0 8.288 6.713 15 15 15 8.288 0 15-6.712 15-15 0-8.287-6.712-15-15-15Zm-3 21V8l9 6.5-9 6.5Z" fill="#FFF"/></svg>
                        <span id="play" className="text-white font-light">Play</span>
                    </button>
                </div>
            </div>)}
        </div>
        <div className="flex gap-7 animate-scrolling">
            {/* 2 */}
            { data.map((item)=>
            <div key={item.title} className="min-w-[420px] rounded-md overflow-hidden relative group/outer">
                <img className="w-full" src={item.thumbnail_trending_large} alt="thumbnail" />
                {/* bookmark */}
                <button aria-label="bookmark" className="absolute top-4 right-6 w-9 h-9 rounded-full bg-darkBlue bg-opacity-40 flex justify-center items-center z-10 group/inner hover:bg-white">
                    <svg width="12" height="14" xmlns="http://www.w3.org/2000/svg"><path d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z" stroke="#FFF" strokeWidth="1.5" fill="none"  className={`group-hover/inner:stroke-black group-hover/inner:fill-white ${item.bookmarked? 'fill-white':'fill-none'} `}/></svg>
                </button>
                <div className="absolute text-white bottom-5 left-5">
                    <div className="flex gap-2 font-extralight items-center">
                        <span>{item.year} </span>
                        <svg width="3" height="3" viewBox="0 0 3 3" fill="none" xmlns="http://www.w3.org/2000/svg"><circle opacity="0.5" cx="1.5" cy="1.5" r="1.5" fill="white"/></svg>
                        <span className="flex gap-2 items-center"><svg width="12" height="12" xmlns="http://www.w3.org/2000/svg"><path d="M10.173 0H1.827A1.827 1.827 0 0 0 0 1.827v8.346C0 11.183.818 12 1.827 12h8.346A1.827 1.827 0 0 0 12 10.173V1.827A1.827 1.827 0 0 0 10.173 0ZM2.4 5.4H1.2V4.2h1.2v1.2ZM1.2 6.6h1.2v1.2H1.2V6.6Zm9.6-1.2H9.6V4.2h1.2v1.2ZM9.6 6.6h1.2v1.2H9.6V6.6Zm1.2-4.956V2.4H9.6V1.2h.756a.444.444 0 0 1 .444.444ZM1.644 1.2H2.4v1.2H1.2v-.756a.444.444 0 0 1 .444-.444ZM1.2 10.356V9.6h1.2v1.2h-.756a.444.444 0 0 1-.444-.444Zm9.6 0a.444.444 0 0 1-.444.444H9.6V9.6h1.2v.756Z" fill="#FFF" opacity=".75"/></svg> {item.category.name}</span>
                        <svg width="3" height="3" viewBox="0 0 3 3" fill="none" xmlns="http://www.w3.org/2000/svg"><circle opacity="0.5" cx="1.5" cy="1.5" r="1.5" fill="white"/></svg>
                        <span>{item.rating}</span>
                    </div>
                    <h2 className="text-2xl tracking-wide">{item.title}</h2>
                </div>
                {/* play */}
                <div className=" justify-center items-center absolute top-0 lef-0 w-full h-full hidden group-hover/outer:flex transition duration-700 bg-darkBlue bg-opacity-50 cursor-pointer">
                    <button aria-labelledby="play" className="flex gap-3 items-center bg-white bg-opacity-30 w-[110px] p-2 rounded-full">
                        <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg"><path d="M15 0C6.713 0 0 6.713 0 15c0 8.288 6.713 15 15 15 8.288 0 15-6.712 15-15 0-8.287-6.712-15-15-15Zm-3 21V8l9 6.5-9 6.5Z" fill="#FFF"/></svg>
                        <span id="play" className="text-white font-light">Play</span>
                    </button>
                </div>
            </div>)}
            </div>
      </div>
    </div>
  )
}

export default Trending
