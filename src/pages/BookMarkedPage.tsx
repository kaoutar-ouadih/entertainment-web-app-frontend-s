import BookMarked from "../components/BookMarked";

interface BookMarkedPageProps{
  bookmarkedItems : number[];
  setBookmarkedItems: (numbers: number[])=>void;
}

const BookMarkedPage: React.FC<BookMarkedPageProps> = ({bookmarkedItems, setBookmarkedItems}) => {


  return (
    <div>
      <BookMarked bookmarkedItems={bookmarkedItems} setBookmarkedItems={setBookmarkedItems}/>
    </div>
  )
}

export default BookMarkedPage
