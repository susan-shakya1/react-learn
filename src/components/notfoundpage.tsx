import { Link } from "react-router-dom";
export function Notfoundpage() {
  return (
    <>
      <div className="text-4xl font-bold text-center"> 404 Not Found</div>
      <Link
        to="/"
        className="text-2xl border-solid border-2 border-black p-2 text-red-500"
      >
        Home
      </Link>
    </>
  );
}
