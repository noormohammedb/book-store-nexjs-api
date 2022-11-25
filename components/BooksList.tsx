import { useEffect, useState } from "react";
import BookItem from "./BookItem";

const BooksList = () => {
  const [data, setdata] = useState<[Book]>();

  const getData = async () => {
    const data = await fetch("/api/books");
    setdata(await data.json());
  };

  useEffect(() => {
    getData();
  }, []);

  console.log("data:", data);
  return (
    <>
      <div>BookList</div>
      <ul>
        {data &&
          data.map((book, index) => {
            {
              // return <BookItem book={book} key={index} />;
              return <BookItem book={book} />;
            }
          })}
      </ul>
    </>
  );
};

export default BooksList;
