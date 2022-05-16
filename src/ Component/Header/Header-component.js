import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import "./Header.css"
function Header() {
    return (
      <>
   
        <h1 className="Travel">Travel Destination</h1>
        <Link to="/">Home</Link>
        <Navbar/>
      </>
    );
  }
  
  export default Header;