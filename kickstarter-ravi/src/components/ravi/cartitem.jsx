/* eslint-disable jsx-a11y/alt-text */

import "./cartitem.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BiBookmark } from "react-icons/bi";
import { BiLike, BiDislike } from "react-icons/bi";
import {useContext} from "react";
import {CartContext} from "../contexts/cartitemContext";
import {Header} from "./header";
import {Navbar} from "./navbar"


export const CartItem = () => {
  const {handleCartUpdate} = useContext(CartContext);
  const[lone,setLone] = useState(0);
  const[lsec,setLsec] = useState(3);
  const [page,setPage] = useState("");
  const [item, setItem] = useState([]);
  useEffect(() => {
    getItem();
  }, [lone]);
  const getItem = async () => {
    let res = await fetch(`http://localhost:3500/api/products`);
    let data = await res.json();
    let aa = Math.floor(Math.random()*10)
    setPage(data[aa])
    setItem(data.slice(lone,lsec));
  };
  const [float, setFloat] = useState("cart-floating2");

  return (
    <>
    <Navbar/>
    <Header/>
      <div className="cart-container">
        <div className="cart-container-child1">
          <h3 className="img-heading" >FUTURE PROJECT</h3>
          <div className="cart-container-child1-div">
            <Link to="/detail">
            <img
              className="cart-container-child1-img"
              src={page.coverimg}
              onMouseEnter={() => {
                setFloat("cart-floating");
              }}
              onMouseLeave={() => {
                setFloat("cart-floating2");
              }}
              onClick={() => {
                handleCartUpdate(page)
              }}
            />

            </Link>
            
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
          <Link to="/detail" className="">
          <p className="img-heading2" onClick={() => {
                handleCartUpdate(page)
              }} >{page.title}</p>
          </Link>
          
          <p className="img-p"  >{page.subtitletitle}</p>
          <p className="img-p2" >By Jenelle Dunn</p>
        </div>
        <div className="cart-container-midle"></div>
        <div className="cart-container-child2">
          {item.map((e) => (
            <>
              <div className="bigDiv">
                <div>
                  <Link to="/detail" className="">
                    <img className="divImg" src={e.coverimg} alt="fsdf" onClick={() => {
                handleCartUpdate(e)
              }} />
                  </Link>
                </div>
                <div className="ss">
                  <Link to="/detail" className="">
                    <p className="ss-h3" onClick={() => {
                handleCartUpdate(e)
              }} >
                     {e.title}
                    </p>
                  </Link>
                  <p className="ss-p1">{e.Backers}%  funded</p>
                  <p className="ss-p2">By Jenelle Dunn</p>
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
        <button disabled={lone === 0} onClick={()=>{
          setLone(lone-1);
          setLsec(lsec-1);
        }} >&#60;</button>
        <button onClick={()=>{
          setLone(0)
          setLsec(3)
        }} >1</button>
        <button onClick={()=>{
          setLone(1)
          setLsec(4)
        }} >2</button>
        <button onClick={()=>{
          setLone(2)
          setLsec(5)
        }} >3</button>
        <button disabled={lsec === 5} onClick={()=>{
          setLone(lone+1);
          setLsec(lsec+1);
        }}>&#62;</button>
      </div>
      <div className="cart-container-clear"></div>
      
    </>
  );
};
