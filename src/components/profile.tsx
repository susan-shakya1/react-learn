import { useParams } from "react-router-dom";

export function Profilepage() {
  const params = useParams<{ pageID: string }>();
  console.log(params);
  return (
    <>
      <div className="text-3xl text-blue-700 font-bold">
        Page no is {params.pageID}
      </div>
    </>
  );
}
