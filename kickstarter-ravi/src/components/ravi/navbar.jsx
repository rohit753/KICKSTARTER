/* eslint-disable jsx-a11y/alt-text */
import "./navbar.css";
import { Link } from "react-router-dom";
import { GoSearch } from "react-icons/go";
export const Navbar = () => {
  return (
    <>
      <div className="cont">
        <div>
          <Link to="" className="link-nav">
            <span className="span-dis">Discover</span>
          </Link>

          <Link to="" className="link-nav">
            <span className="span-pro">Start a project</span>
			
          </Link>
        </div>

        <div className="img-div">
          <Link to="" className="link-nav">
            <img
              className="nav-img"
              src="https://logos-world.net/wp-content/uploads/2020/10/Kickstarter-Logo-700x394.png"
            />
          </Link>
        </div>
        <div>
          <Link to="" className="link-nav">
            <span className="span-serach">Search</span>
            <GoSearch className="icon-font" />
          </Link>
          <Link to="" className="link-nav">
            <span className="span-login">Log in</span>
          </Link>
        </div>
      </div>

      {/* for media quairy */}

      <div className="media-container">
        <div className="img-div">
          <Link to="" className="link-nav">
            <img
              className="nav-img"
              src="https://logos-world.net/wp-content/uploads/2020/10/Kickstarter-Logo-700x394.png"
            />
          </Link>
        </div>
      </div>
	  <div className="line" ></div>
      <div className="low-container" >
		  
        <div>
          <Link to="" className="link-nav">
            <span className="span-dis">Discover</span>
          </Link>

          <Link to="" className="link-nav">
            <span className="span-pro">Start a project</span>
			<span className="media-span-pro" >Start</span>
          </Link>
        </div>
        <div>
          <Link to="" className="link-nav">
            <span className="span-serach">Search</span>
            <GoSearch className="icon-font" />
          </Link>
          <Link to="" className="link-nav">
            <span className="span-login">Log in</span>
          </Link>
        </div>
      </div>
	  <div className="line" ></div>
	  
    </>
  );
};
