import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <div
      style={{
        backgroundColor: "#ddd",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "20px",
        }}
      >
        <img
          style={{
            width: "150px",
          }}
          src="/images/logo.png"
          alt="logo"
        />

        <ul
          style={{
            display: "flex",
            gap: "50px",
          }}
        >
          <li
            style={{
              listStyle: "none",
            }}
          >
            <Link to="/">Home</Link>
          </li>
          <li
            style={{
              listStyle: "none",
            }}
          >
            <Link to="/projects">Projects</Link>
          </li>
          <li
            style={{
              listStyle: "none",
            }}
          >
            <Link to="/Aboutus">About-Us</Link>
          </li>
          <li
            style={{
              listStyle: "none",
            }}
          >
            contact
          </li>
        </ul>
      </div>
    </div>
  );
}
