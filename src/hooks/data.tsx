import { useEffect, useState } from "react";

export function Data() {
  const [posts, setPost] = useState([]);
  const fetchPost = () => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "GET",
    })
      .then((response) => {
        const parsed = response.json();
        parsed.then((data) => {
          console.log("data from server", data);
          setPost(data);
        });
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
  useEffect(fetchPost, []);
  return (
    <div>
      <h1>Data loading from backend</h1>
      <div>{JSON.stringify(posts)}</div>
    </div>
  );
}
