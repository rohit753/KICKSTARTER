import "./header.css";

import { Link } from "react-router-dom";
export const Header = () => {

  return (
    <>
      <div className="h-line"></div>
      <div className="container">
        <div className="container-child">
          <Link className="h-link" to="">Arts</Link>
        </div>
        <div className="container-child">
          <Link className="h-link" to="">Comics & Illustration</Link>
        </div>
        <div className="container-child">
          
          <Link className="h-link" to="">Design & Tech</Link>
        </div>
        <div className="container-child">
          <Link className="h-link" to="">Food & Craft</Link>
        </div>
        <div className="container-child">
          <Link className="h-link" to="">Games</Link>
        </div>
        <div className="container-child">
          <Link className="h-link" to="">Musics</Link>
        </div>
        <div className="container-child">
          <Link className="h-link" to="">Publishing</Link>
        </div>
      </div>
      <div className="h-line"></div>
	  
    </>
  );
};
