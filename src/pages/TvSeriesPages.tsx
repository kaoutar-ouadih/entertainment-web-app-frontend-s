import TvSeries from "../components/TvSeries";
import { Movie } from "../Movie";

interface TvSeriesPagesProps {
  copyOfData: Movie[]; 
  bookmarkedItems : number[];
  setBookmarkedItems: (numbers: number[])=>void;
}

const TvSeriesPages: React.FC<TvSeriesPagesProps> = ({copyOfData, bookmarkedItems, setBookmarkedItems}) => {
  return (
    <div>
      <TvSeries copyOfData={copyOfData.filter((item)=> item.category.name.toLocaleLowerCase() === 'tv series')} bookmarkedItems={bookmarkedItems} setBookmarkedItems={setBookmarkedItems}/>
    </div>
  )
}

export default TvSeriesPages
