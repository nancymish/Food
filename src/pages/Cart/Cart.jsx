import React, { useContext, useEffect } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";


const Cart = () => {
  const { cartItems, food_list, removeFromCart,getTotalCartAmount } = useContext(StoreContext);

  const navigate = useNavigate();

  useEffect(() => {
    console.log("foodlist", food_list);
    console.log("Cartitems", cartItems);
  }, []);

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item.id]>0) {
            return (
              <div>
                <div className="cart-items-title  cart-items-item">
                  <img src={item.image} alt="/" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item.id]}</p>
                  <p>${item.price * cartItems[item.id]}</p>
                  <p onClick={()=>removeFromCart(item.id)} className="cross">X</p>
                </div>
                <hr />
              </div>
            );
          }
        })}
      </div>

      <div className="cart-bottom">
          <div className="cart-total">
            <h2>Carts Total</h2>
          
          <div className="cart-total-detail">
            <p>Subtotal</p>
            <p>${getTotalCartAmount()}</p>
          </div>
          <hr/>
          <div className="cart-total-detail">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount()===0?0:2}</p>
          </div>
          <hr/>
          <div className="cart-total-detail">
              <p>Total</p>
              <p>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</p>
          </div>
          <button onClick={()=>navigate('/order')}>PROCEED TO CHECKOUT</button>
      </div>

      <div className="cart-promocode">
        <div>
          <p>If you have a promo code, Enter Here!!!</p>
          <div className="cart-promocode-input">
            <input type="text" placeholder="promocode"/>
            <button>Submit</button>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Cart;
