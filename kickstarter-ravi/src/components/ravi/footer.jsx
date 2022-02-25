/* eslint-disable jsx-a11y/alt-text */
import { Link } from "react-router-dom";
import "./footer.css";
import "./header.css";
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";

export const Footer = () => {
  return (
    <>
      <div className="h-line"></div>
      <div className="f-container">
        <div className="f-container-child">
          <div className="container-child">
            <Link className="h-link" to="">
              Arts
            </Link>
          </div>
          <div className="container-child">
            <Link className="h-link" to="">
              Comics & Illustration
            </Link>
          </div>
          <div className="container-child">
            <Link className="h-link" to="">
              Design & Tech
            </Link>
          </div>
          <div className="container-child">
            <Link className="h-link" to="">
              Food & Craft
            </Link>
          </div>
          <div className="container-child">
            <Link className="h-link" to="">
              Games
            </Link>
          </div>
          <div className="container-child">
            <Link className="h-link" to="">
              Musics
            </Link>
          </div>
          <div className="container-child">
            <Link className="h-link" to="">
              Pblishing
            </Link>
          </div>
        </div>
      </div>
      <div className="h-line"></div>

      {/*-------------------------- second section----------------- */}

      <div className="f-container-sec">
        <div className="f-container-about" >
          <h3>ABOUT</h3>
          <div>About us</div>
          <div>Our charter</div>
          <div>Stats</div>
          <div>Press</div>
          <div>Job</div>
        </div>
        <div className="f-container-about" >
          <h3>SUPPORT</h3>
          <div>Help Centre</div>
          <div>Our Rules</div>
          <div>Creater Resources</div>
          <div>Forword Funds</div>
          <div>Brand assets</div>
        </div>
        <div className="f-container-about" >
          <h3>MORE FROM KICKSTARTER</h3>
          <div>Newsletters</div>
          <div>Kickstarter magazine</div>
          <div>The Creative Independent</div>
          <div>Mobile Apps</div>
          <div>Research</div>
        </div>
      </div>
      <div className="f-container-third">
        <div className="f-container-third-left">
          <img
            className="f-container-third-img"
            src="data:image/png;base64,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"
          />
          <span className="f-container-third-span">
            Kickstarter, PBC © 2022
          </span>
        </div>
        <div className="f-container-third-right">
          <BsFacebook className="f-container-sm" />
          <BsInstagram className="f-container-sm" />
          <BsTwitter className="f-container-sm" />
          <BsYoutube className="f-container-sm" />
          <select name="" id="" className="f-container-sec1" >
            <option value="0">English</option>
            <option value="1">Deutsch</option>
            <option value="2">Spanol</option>
            <option value="3">Francaise</option>
            <option value="4">Italiano</option>
            <option value="5">Honda</option>
          </select>
          <select name="" className="f-container-sec2">
            <option value="0"> &#36; US Dollar (USD) </option>
            <option value="1"> &#128; Euro (EUR)</option>
            <option value="2">&#36; Astralian Dollar(AUD)</option>
            <option value="3">&#36; Canadian Dollar (CAD)</option>
            <option value="4">Fr Swiss Franc (CHF)</option>
            <option value="5">kr Danish Karone (DKK)</option>
            <option value="6">&#163; Pound Straling (GBP)</option>
            <option value="7">&#36; Hong Kong Dollar (HKD)</option>
            <option value="8">&#165; Japanese Yen (JPY)</option>
            <option value="9">&#36; Maxican Paso (MXN)</option>
            <option value="10">kr Norwengian Krone (NOK)</option>
            <option value="11">&#36; Singapore Dollar (SGD)</option>
          </select>
        </div>
        <div className="f-container-clear"></div>
        <div className="f-container-right-media">
          <div className="f-container-right-media-f" >
            <BsFacebook className="f-container-sm f-container-sm-media" />
            <BsInstagram className="f-container-sm" />
            <BsTwitter className="f-container-sm" />
            <BsYoutube className="f-container-sm" />
          </div>
          <div className="f-container-right-media-s" >
            <select name="" id="" className="f-container-sec1" >
              <option value="0">English</option>
              <option value="1">Deutsch</option>
              <option value="2">Spanol</option>
              <option value="3">Francaise</option>
              <option value="4">Italiano</option>
              <option value="5">Honda</option>
            </select>
            <select name="" id="" className="f-container-sec2" >
              <option value="0"> &#36; US Dollar (USD) </option>
              <option value="1"> &#128; Euro (EUR)</option>
              <option value="2">&#36; Astralian Dollar(AUD)</option>
              <option value="3">&#36; Canadian Dollar (CAD)</option>
              <option value="4">Fr Swiss Franc (CHF)</option>
              <option value="5">kr Danish Karone (DKK)</option>
              <option value="6">&#163; Pound Straling (GBP)</option>
              <option value="7">&#36; Hong Kong Dollar (HKD)</option>
              <option value="8">&#165; Japanese Yen (JPY)</option>
              <option value="9">&#36; Maxican Paso (MXN)</option>
              <option value="10">kr Norwengian Krone (NOK)</option>
              <option value="11">&#36; Singapore Dollar (SGD)</option>
            </select>
          </div>
        </div>
      </div>
      {/*----------------- this is the last section--------------------------- */}
      <div className="h-line"></div>
      <div className="f-container">
        <div className="f-container-child">
          <div className="container-child">
            <Link className="h-link" to="">
              Trust & Sefety
            </Link>
          </div>
          <div className="container-child">
            <Link className="h-link" to="">
              Terms of Use
            </Link>
          </div>
          <div className="container-child">
            <Link className="h-link" to="">
              Privacy Policy
            </Link>
          </div>
          <div className="container-child">
            <Link className="h-link" to="">
              Cookies POlicy
            </Link>
          </div>
          <div className="container-child">
            <Link className="h-link" to="">
              Accessibility Statement
            </Link>
          </div>
          <div className="container-child">
            <Link className="h-link" to="">
              CA Notice of Consent
            </Link>
          </div>
        </div>
      </div>
      <div className="h-line"></div>
    </>
  );
};
