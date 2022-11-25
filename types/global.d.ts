interface Book {
  id: string;
  name: string;
  description: string;
  imgUrl: string;
}

interface BookPropToItem {
  book: Book;
}
