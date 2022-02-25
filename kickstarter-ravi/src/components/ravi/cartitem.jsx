/* eslint-disable jsx-a11y/alt-text */

import "./cartitem.css";
import { useState, useEffect } from "react";

export const CartItem = () => {
  const [item, setItem] = useState([]);
  useEffect(() => {
    getItem();
  }, []);
  const getItem = async () => {
    let res = await fetch("http://localhost:3002/item");
    let data = await res.json();
    setItem(data);
  };
  return (
    <>
      <div className="cart-container">
        <div className="cart-container-child1">
          <h3>copntent</h3>
          <div className="cart-container-child1-div">
            <img
              className="cart-container-child1-img"
              src="https://ksr-ugc.imgix.net/assets/036/178/615/3939fd2272dada7b19382c810c0067a9_original.jpg?ixlib=rb-4.0.2&crop=faces&w=1024&h=576&fit=crop&v=1643225222&auto=format&frame=1&q=92&s=c52660f1764d55f9926f6215d537b0fb"
            />
          </div>
          <h3>content</h3>
          <p>paragrphe</p>
        </div>
        <div className="cart-container-midle"></div>
        <div className="cart-container-child2">
          {item.map((e) => (
            <>
              <div>
                <div>
                  <img src={e.url} alt="fsdf" />
                </div>
                <div>
					this is cool things
				</div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};
