/* eslint-disable jsx-a11y/alt-text */
import { useState, useEffect } from "react";
import "./landingPage.css";
import { GoTriangleRight } from "react-icons/go";
import { BiBookmark } from "react-icons/bi";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
export const LandingPage = () => {
  return (
    <>
      <div className="landingPagetop">
        <h2 className="landing">this is heading</h2>
        <p className="landing-para">this paragraph</p>
      </div>
      <div className="landing-img-div">
        <div className="landing-img">
          <img
            className="landing-img-img"
            src="https://ksr-ugc.imgix.net/assets/036/271/019/d58d849038d3fc6222e136ca7a465e28_original.png?ixlib=rb-4.0.2&crop=faces&w=352&h=198&fit=crop&v=1644023106&auto=format&frame=1&q=92&s=f1818ccdb6042569e14c709f6ab91729"
          />
          <Link to="">
            <div className="landing-button">
              <GoTriangleRight className="landing-button-icon" />
            </div>
          </Link>
        </div>
        <div className="landing-img-sec">
          <div className="landing-sec-flex">
            <div className="landing-sec-flex1"></div>
            <div className="landing-sec-flex2"></div>
          </div>
          <p className="landing-sec-p1">USD dolloar</p>
          <p className="landing-sec-p2">dasd dasd</p>
          <p className="landing-sec-p3">137</p>
          <p className="landing-sec-p4">rwer erwer weqrwe</p>
          <p className="landing-sec-p3">137</p>
          <p className="landing-sec-p4">rwer erwer weqrwe</p>
          <button className="landing-sec-button">Back this project</button>
          <button className="landing-sec-button2">
            <BiBookmark /> Remind me
          </button>
          <BsFacebook className="landing-sec-fb" />
          <BsTwitter className="landing-sec-tw" />
          <MdEmail className="landing-sec-em" />
          <span className="landing-sec-sp">&lt;/&gt;</span>
          <p className="landing-sec-p5">asdas dasd sdas dsad sad asd </p>
        </div>
      </div>
      <div className="landing-info">
        <div className="landing-info-sp">
          <span>
            Kickstarter connects creators with backers to fund projects.
          </span>
        </div>
        <div className="landing-info-sp">
          <span>
            Rewards aren’t guaranteed, but creators must regularly update
            backers.
          </span>
        </div>
        <div className="landing-info-sp">
          <span>
            You’re only charged if the project meets its funding goal by the
            campaign deadline.
          </span>
        </div>
      </div>
      <hr style={{ margin: 0 }} />
      <div className="landing-info-nav">
        <div className="landing-info-nav-l">
          <div className="landing-info-nav-l-c">
            <p className="landing-info-nav-l-c-p">Campaign</p>

            <p className="landing-info-nav-l-c-p">FAQ</p>

            <p className="landing-info-nav-l-c-p">Updates</p>

            <p className="landing-info-nav-l-c-p">Comments</p>

            <p className="landing-info-nav-l-c-p">Community</p>
          </div>
        </div>
        <div className="landing-info-nav-r">
          <div className="landing-info-nav-r-c">
            <Link to="">
              <button className="landing-info-nav-b">Back this project</button>
            </Link>

            <span className="landing-info-nav-sp">
              <BiBookmark /> Remind me
            </span>
          </div>
        </div>
        <div className="landing-info-nav-c"></div>
      </div>
      <hr />
      <div className="landing-info-last">
        <div className="landing-info-last-c1">
          <h4
            style={{ fontSize: "1.6rem", padding: 0, margin: 0, color: "grey" }}
          >
            STORY
          </h4>
          <hr />
          <h4
            style={{ fontSize: "1.6rem", padding: 0, margin: 0, color: "grey" }}
          >
            RISKS
          </h4>
        </div>
        <div className="landing-info-last-c2">
			<div>
				<img style={{width: "100%"}} src="https://ksr-ugc.imgix.net/assets/036/260/584/5a36e82ac5c5b3e4c6126a5be29026e5_original.png?ixlib=rb-4.0.2&w=680&fit=max&v=1643934317&auto=format&gif-q=50&lossless=true&s=9e63edd981fc6a5eea0d47e87b6719c7" alt="" />
			</div>
			<p>
			I am very excited to share with you my very first children's book, Dear Little Brown Girl. This beautiful & empowering lyrical ode, builds little girls' self-esteem, imagination, and spirit. This book follows a little girl as she is navigating some of the obstacles of life. This book was created to remind little girls that they are beautiful, smart, and worthy. Creating positive self-images, teaching girls to love themselves, and increasing self-confidence.
			</p>
			<img style={{width: "100%"}} src="https://ksr-ugc.imgix.net/assets/036/260/598/25e371d283191cec41acad9b3770b16d_original.png?ixlib=rb-4.0.2&w=680&fit=max&v=1643934407&auto=format&gif-q=50&lossless=true&s=1b4a2f86439eddcd448b5b4ad842ad68" alt="" />
			<div>
				<img style={{width: "100%"}} src="https://ksr-ugc.imgix.net/assets/036/261/636/a0f34d4126fe3b59f4fba4993a81a9f8_original.png?ixlib=rb-4.0.2&w=680&fit=max&v=1643943096&auto=format&gif-q=50&lossless=true&s=93ab5e63480711f0e390ee04b03216f3" alt="" />
			</div>
			<div>
				<img style={{width: "100%"}} src="https://ksr-ugc.imgix.net/assets/036/260/606/8be957aac0144c178b6e394b0cb0ce56_original.png?ixlib=rb-4.0.2&w=680&fit=max&v=1643934484&auto=format&gif-q=50&lossless=true&s=1f51259edde3d513731bab670f629b76" alt="" />
			</div>
			<p>
			About 12% of children's book characters are Black/African American. The compelling story does center around one main character but we made sure to pay great attention to the identifying details like skin tone, hair type, etc. These added personalized details make the characters more relatable for the readers because I want every little girl to see herself in the character. It is important to create books that are more reflective of the diverse world that we live in and I believe having a diverse bookshelf will help instill positive ideas of equity, acceptance, inclusion, and understanding in our children. Representation Matters!
			</p>
			<div>
				<img style={{width: "100%"}} src="https://ksr-ugc.imgix.net/assets/036/260/613/a2dd54da9cbe0b113acfea73a1cb3405_original.png?ixlib=rb-4.0.2&w=680&fit=max&v=1643934548&auto=format&gif-q=50&lossless=true&s=5ac7743d194fb193075a2c8d166ff83a" alt="" />
			</div>
			<p>
			In addition to the hardcover book, we have created exclusive rewards designed just for this campaign. Check out the limited edition perks below.
			</p>
			<div>
				<img style={{width: "100%"}} src="https://ksr-ugc.imgix.net/assets/036/260/616/a8efa0a16e011d5acb5795e24bd2583c_original.png?ixlib=rb-4.0.2&w=680&fit=max&v=1643934585&auto=format&gif-q=50&lossless=true&s=1ee903d057f9afeaff97c082e48e0f32" alt="" />
			</div>
			<p>
			A mock-up design of the book was created to show you the detailed illustrations and what you can expect once the books come back from the printer.
			</p>
			<div>
				<img style={{width: "100%"}} src="https://ksr-ugc.imgix.net/assets/036/364/752/cb22df12cc4361551b2d829f18c47808_original.png?ixlib=rb-4.0.2&w=680&fit=max&v=1644908258&auto=format&gif-q=50&lossless=true&s=c587c09d8f901b0fa8403db1fabf49b8" alt="" />
			</div>
			<p>
			Let's talk about Add-Ons. Add-Ons rewards are a feature that Kickstarter offers which allows you to create a customized package. There are many options available giving you the chance to get creative by mixing/matching items and adding them to an already existing bundle. You can donate a copy(ies) of Dear Little Brown Girl to a local (or not so local) community as well. You will also have the opportunity to "level up" any bundle you choose by adding additional copies of the book. Extra copies of the book can be added to any bundle for an additional $20 per copy.
			</p>
			<div>
				<img style={{width: "100%"}} src="https://ksr-ugc.imgix.net/assets/036/260/652/beb778d0aec76d5e1c7341884d42a845_original.png?ixlib=rb-4.0.2&w=680&fit=max&v=1643934853&auto=format&gif-q=50&lossless=true&s=496c78cd69d2e684a00e620fa803c92d" alt="" />
			</div>
			<p>Dear Little Brown Girl has turned into so much more than I could have imagined. A lot of blood sweat and tears have gone into to project to make sure this book gets into everyone's home. </p>
			<div>
				<img style={{width: "100%"}} src="https://ksr-ugc.imgix.net/assets/036/260/655/331d53120c089e7ba53089ee9088f5de_original.png?ixlib=rb-4.0.2&w=680&fit=max&v=1643934880&auto=format&gif-q=50&lossless=true&s=68bf21961e508cbbba53cca2392118c9" alt="" />
			</div>
			<p>
			Self-publishing is quite the long journey of ups and downs and there is still a ton left to do. With that being said it is very important to create a top-quality children's book using quality materials because this book is so close to my heart. There are several tiers and the cost of shipping has been built into the pledge cost you see.
			</p>
			<div>
				<img style={{width: "100%"}} src="https://ksr-ugc.imgix.net/assets/036/260/656/473834fa95a2ca81bd7288e6ddbb88e6_original.png?ixlib=rb-4.0.2&w=680&fit=max&v=1643934905&auto=format&gif-q=50&lossless=true&s=b0cc16498009cffd25ac0700bb5d0eff" alt="" />
			</div>
			<p>
			We expect to deliver according to the timeline above. If anything changes we will communicate with all backers using Kickstarter and via email provided.
			</p>
			<div>
				<img style={{width: "100%"}} src="https://ksr-ugc.imgix.net/assets/036/364/798/0f0dc28e2f5a25b9d8b7f5098338e9a3_original.png?ixlib=rb-4.0.2&w=680&fit=max&v=1644908900&auto=format&gif-q=50&lossless=true&s=f36b43914a362fbea79d6dff6f3e48c8" alt="" />
			</div>
			<p>
			By pre-ordering a copy of the book now, you're helping launch the first print run to help distribute the hardcover books into tiny hands and bookstores. Some additional funds have been allocated to cover the costs of fees for illustrations, editing, formatting, customs, and port fees. We are raising money to fund the printing and production of Dear Little Brown Girl. It is the goal of every Kickstarter host to reach their campaign goal as it means more rewards to offer for backers. DREAM BIG OR GO HOME :) 
			</p>
		</div>
        <div className="landing-info-last-c3">
          <div
            style={{
              border: "1px solid #eeebd6",
              padding: "1rem",
              margin: "1rem",
            }}
          >
            <h2>Jenelle Dunn</h2>
            <p>Charlotte, NC</p>
            <p>
              Jenelle Dunn is a paralegal, wife, and mother to an amazing son.
              Since she was a child she has always had a love for all things
              books, word searches, and creative writing. She has since decided
              it was time to pursue one of her old dreams of becoming a
              published author.
            </p>
          </div>
          <h3 style={{ fontSize: "2rem" }}>Support</h3>
          <div
            style={{
              border: "1px solid #eeebd6",
              padding: "1rem",
              margin: "1rem",
            }}
          >
            <h4>Pledge without a reward</h4>
            <div>
              <h3>Back it because you believe in it.</h3>
              <p>
                Support the project for no reward, just because it speaks to
                you.
              </p>
            </div>
            <button
              style={{
                color: "white",
                width: "15vw",
                height: "4rem",
                backgroundColor: "#028858",
                border: "none",
              }}
            >
              Continue
            </button>
          </div>
          <div
            style={{
              border: "1px solid #eeebd6",
              padding: "1rem",
              margin: "1rem",
            }}
          >
            <h4>Pledge US$ 10 or more</h4>
            <div>
              <h2>Digital Bundle</h2>
              <p>
                Download a direct digital copy of Dear Little Brown Girl. With a
                digital book you can have unlimited access anytime, anywhere!
                INCLUDES:
				<ul>
					<li>Early Release Digital copy of "Dear Little Brown Girl" E-Book</li>
					<li>Digital At Home Printable Coloring Pages & Activity Sheets</li>
				</ul>
              </p>
			  <h5>Pledge amount</h5>
			  <button style={{width:"4rem",height:"4rem"}} >$</button>
			  <input style={{height:"3rem",width:"15rem"}} type="text"  />
            </div>
            <button
              style={{
                color: "white",
                width: "15vw",
                height: "4rem",
                backgroundColor: "#028858",
                border: "none",
				marginTop:"2rem"
              }}
            >
              Continue
            </button>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
};
