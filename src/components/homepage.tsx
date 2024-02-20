import "../index.css";
import { NavLink, Outlet } from "react-router-dom";
export function Homepage() {
  const profiles = [1, 2, 3, 4, 5];
  return (
    <div className="flex gap-10">
      <div className="flex flex-col gap-3 text-3xl">
        {profiles.map((prof) => (
          <NavLink
            key={prof}
            to={`/page/${prof}`}
            className={({ isActive }) => {
              return isActive ? "text-red-300" : "";
            }}
          >
            profile {prof}
          </NavLink>
        ))}
      </div>
      <Outlet />
    </div>
  );
}
