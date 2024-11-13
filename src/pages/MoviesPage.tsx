import Movies from "../components/Movies"
import { Movie } from "../Movie";

interface MoviesPageProps {
  copyOfData: Movie[]; 
  bookmarkedItems : number[];
  setBookmarkedItems: (numbers: number[])=>void;
  }

const MoviesPage: React.FC<MoviesPageProps> = ({copyOfData, bookmarkedItems, setBookmarkedItems}) => {
  return (
    <div>
      <Movies copyOfData={copyOfData.filter((item)=> item.category.name.toLocaleLowerCase() === 'movie')} bookmarkedItems={bookmarkedItems} setBookmarkedItems={setBookmarkedItems}/>
    </div>
  )
}

export default MoviesPage
