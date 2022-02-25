/* eslint-disable jsx-a11y/alt-text */

import "./cartitem.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BiBookmark } from "react-icons/bi";
import { BiLike, BiDislike } from "react-icons/bi";
export const CartItem = () => {
  
  const [page,setPage] = useState(1);
  const [item, setItem] = useState([]);
  useEffect(() => {
    getItem();
  }, []);
  const getItem = async () => {
    let res = await fetch(`http://localhost:3002/item?_page=${page}&_limit=3`);
    let data = await res.json();
    setItem(data);
  };
  const [float, setFloat] = useState("cart-floating2");

  return (
    <>
      <div className="cart-container">
        <div className="cart-container-child1">
          <h3 className="img-heading" >FUTURE PROJECT</h3>
          <div className="cart-container-child1-div">
            <img
              className="cart-container-child1-img"
              src="https://ksr-ugc.imgix.net/assets/036/178/615/3939fd2272dada7b19382c810c0067a9_original.jpg?ixlib=rb-4.0.2&crop=faces&w=1024&h=576&fit=crop&v=1643225222&auto=format&frame=1&q=92&s=c52660f1764d55f9926f6215d537b0fb"
              onMouseEnter={() => {
                setFloat("cart-floating");
              }}
              onMouseLeave={() => {
                setFloat("cart-floating2");
              }}
            />
            <div
              className={float}
              onMouseEnter={() => {
                setFloat("cart-floating");
              }}
            >
              <div className="floating-div">
                <Link to="" className="">
                  <BiBookmark className="cart-icon" />
                </Link>
              </div>
              <div className="floating-div">
                <Link to="" className="">
                  <BiLike className="cart-icon" />
                </Link>
              </div>

              <div className="floating-div">
                <Link to="" className="">
                  <BiDislike className="cart-icon" />
                </Link>
              </div>
            </div>
          </div>
          <Link to="" className="">
          <p className="img-heading2" >Lorem ipsum dolor sit</p>
          </Link>
          
          <p className="img-p" > paragrphe das asd sadasd sadas das</p>
          <p className="img-p2" >dsa asdsa asdas das asd</p>
        </div>
        <div className="cart-container-midle"></div>
        <div className="cart-container-child2">
          {item.map((e) => (
            <>
              <div className="bigDiv">
                <div>
                  <Link to="" className="">
                    <img className="divImg" src={e.url} alt="fsdf" />
                  </Link>
                </div>
                <div className="ss">
                  <Link to="" className="">
                    <p className="ss-h3">
                      rewrwerwe erwer fdfs sdsdf sdfsdf sdfsd fsdf sdf{" "}
                    </p>
                  </Link>
                  <p className="ss-p1">funded</p>
                  <p className="ss-p2">rwerwe erwe rrwer </p>
                  <div>
                    <BiBookmark className="cart-icon" />
                    <BiLike className="cart-icon" />
                    <BiDislike className="cart-icon" />
                  </div>
                </div>
              </div>
              <div></div>
            </>
          ))}
        </div>
      </div>
      <div className="cart-container-div">
        <button>&#60;</button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button onClick={()=>{
          setPage((p)=>{
            return p-1;
          });
        }}>&#62;</button>
      </div>
      <div className="cart-container-clear"></div>
    </>
  );
};
