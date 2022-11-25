import Image from "next/image";

// const BookItem = ({ book }: Book) => {
const BookItem = ({ book }: BookPropToItem) => {
  console.log("book:", book);
  // const { id, name, description, imgUrl } = book.book;
  const { id, name, description, imgUrl } = book;
  return (
    <>
      <Image src={imgUrl} alt={name} width={120} height={102} />
      <h4>{name}</h4>
      <p>{description}</p>
    </>
  );
};

export default BookItem;
