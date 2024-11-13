type SearchBarProps = {
  searchKeyword: string;
  setSearchKeyword: (keyword: string) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({searchKeyword, setSearchKeyword}) => {

  return (
    <div className="pt-7 pl-7 pb-3">
      <div className="relative">
        <input type="text" 
          value={searchKeyword}
          onChange={(e)=>setSearchKeyword(e.target.value)}
          placeholder="Search for movies or TV series" 
          className="w-full py-4 px-12 bg-transparent font-extralight text-xl outline-none text-white" />
        <svg className="absolute top-3 left-0" width="28" height="28" xmlns="http://www.w3.org/2000/svg"><path d="M27.613 25.72 23.08 21.2a10.56 10.56 0 0 0 2.253-6.533C25.333 8.776 20.558 4 14.667 4S4 8.776 4 14.667c0 5.89 4.776 10.666 10.667 10.666A10.56 10.56 0 0 0 21.2 23.08l4.52 4.533a1.333 1.333 0 0 0 1.893 0 1.333 1.333 0 0 0 0-1.893ZM6.667 14.667a8 8 0 1 1 16 0 8 8 0 0 1-16 0Z" fill="#FFF"/></svg>
      </div>
    </div>
  )
}

export default SearchBar
