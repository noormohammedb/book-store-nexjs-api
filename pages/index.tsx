import { useState } from "react";
import BooksList from "../components/BooksList";

const url = `http://localhost:${3000}`;

export default function Home() {
  const [name, setName] = useState("");
  fetch(`${url}/api/hello/`)
    .then((res) => {
      // console.log("res:", res);
      if (!res.ok) {
        throw new Error("Network response was not ok");
      } else return res.json();
    })
    .then((data) => {
      setName(data.name);
    })
    .catch((err) => {
      console.log("err:", err);
    });

  return (
    <>
      <div>
        <p>hello: {name}</p>
        <BooksList />
      </div>
    </>
  );
}
