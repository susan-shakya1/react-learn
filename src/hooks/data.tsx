import { useEffect, useState } from "react";
// Function based React lifecycle
// 1. Component mount
// 2. Component Unmount

// Class based react lifecycle
//ComponentDidMount
//ComponentDidUpdate
//ComponentWillUnmount
export function Data() {
  const [isPostVisible, setIsPostivisible] = useState(false);
  const [posts, setPost] = useState<
    { id: number; userId: number; body: string; title: string }[]
  >([]);
  const fetchPost = () => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "GET",
    })
      .then((response) => {
        const parsed = response.json();
        parsed.then((data) => {
          // console.log("data from server", data);
          setPost(data);
        });
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
  useEffect(fetchPost, []);
  const handlePostToggle = () => {
    setIsPostivisible(!isPostVisible);
  };
  return (
    <div>
      <h1
        style={{
          margin: "16px 0",
        }}
      >
        Posts
      </h1>
      <div>
        <button onClick={handlePostToggle}>Toggle Posts</button>
      </div>
      {isPostVisible ? (
        <div>
          {posts.map((post) => {
            return (
              <div
                key={post.id}
                style={{
                  border: "1px solid #ccc",
                  padding: "16px",
                  boxShadow: "1px 2px 3px #eee",
                }}
              >
                <h2>{post.title}</h2>
                <p>{[post.body]}</p>
              </div>
            );
          })}{" "}
        </div>
      ) : (
        <p>Post is not visible</p>
      )}
    </div>
  );
}
