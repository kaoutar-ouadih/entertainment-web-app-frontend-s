import Recommended from "../components/Recommended"
import Trending from "../components/Trending"
import {Movie} from "../Movie"


interface HomePageProps {
  copyOfData : Movie[];
  data : Movie[];
  bookmarkedItems : number[];
  setBookmarkedItems: (numbers: number[])=>void;
}

const HomePage: React.FC<HomePageProps> = ({copyOfData, data, bookmarkedItems, setBookmarkedItems}) => {

  return (
        <div>
            <Trending data={data.filter((item)=> item.trending)}/>
            <Recommended copyOfData={copyOfData} bookmarkedItems={bookmarkedItems} setBookmarkedItems={setBookmarkedItems}/>
        </div>
  )
}

export default HomePage
