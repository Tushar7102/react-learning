// import { Link } from "react-router-dom";
// import "../App.css"
// const Navbar = () => {
//   return (
//     <div>
//       <div style={{ display: "flex", justifyContent: "space-between " }}>
//         <Link to={"/login"}>Login</Link>
//         <Link to={"/dashboard"}>Dashboard</Link>
//         <Link to={"/post"}>Post</Link>
//         <Link to={"/postwithformik"}>PostWithFormik</Link>
//         <br />
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import { Link } from "react-router-dom";
import "../App.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar">
        <Link to="/login" className="link">
          Login
        </Link>
        <Link to="/dashboard" className="link">
          Dashboard
        </Link>
        <Link to="/post" className="link">
          Post
        </Link>
        <Link to="/postwithformik" className="link">
          PostWithFormik
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
