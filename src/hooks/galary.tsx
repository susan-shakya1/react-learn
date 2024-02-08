import { useEffect, useState } from "react";
import "../App.css";
export function Galary() {
  const [photo, setPhoto] = useState<
    {
      albumID: number;
      id: number;
      title: string;
      thumbnailUrl: string;
      url: string;
    }[]
  >([]);
  const handleGalary = () => {
    fetch(" https://jsonplaceholder.typicode.com/photos", { method: "GET" })
      .then((response) => {
        const parsed = response.json();
        parsed.then((data) => {
          console.log("data...", data);
          setPhoto(data);
        });
      })
      .catch((error) => {
        console.log("data is not fetech correctly", error);
      });
  };
  useEffect(handleGalary, []);
  return (
    <div>
      <h1>Galary</h1>
      {/* <div>{JSON.stringify(photo)}</div> */}
      <div className="gird">
        {photo.map((photos) => {
          return (
            // <div key={photos.id}>
            <img src={photos.thumbnailUrl} alt="" />
            // </div>
          );
        })}
      </div>
    </div>
  );
}
