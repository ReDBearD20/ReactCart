import React from "react";
import { AiFillDelete } from "react-icons/ai";
import "../styles/cart.scss";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const { cartItems, subTotal, tax, shipping, total } = useSelector(
    (state) => state.cart
  );

  const dispatch = useDispatch();

  const incrementHandler = (id) => {
    dispatch({ type: "addToCart", payload: { id } });
    dispatch({ type: "calculatePrice" });
  };
  const decrementHandler = (id) => {
    dispatch({ type: "decrement", payload: id });
    dispatch({ type: "calculatePrice" });
  };
  const deleteHandler = (id) => {
    dispatch({ type: "deleteFromCart", payload: id });
    dispatch({ type: "calculatePrice" });
  };
  return (
    <div className="cart">
      <main>
        {cartItems.length > 0 ? (
          cartItems.map((i) => (
            <CartItem
              key={i.id}
              imgSrc={i.imgSrc}
              name={i.name}
              price={i.price}
              qty={i.qty}
              id={i.id}
              increment={incrementHandler}
              decrement={decrementHandler}
              deleteItem={deleteHandler}
            />
          ))
        ) : (
          <h1>Please add some items to cart</h1>
        )}
      </main>
      <aside>
        <h2>Subtotal:${subTotal}</h2>
        <h2>Shipping:${shipping}</h2>
        <h2>Tax:${tax}</h2>
        <h2>Total:${total}</h2>
      </aside>
    </div>
  );
};

const CartItem = ({
  imgSrc,
  name,
  price,
  qty,
  id,
  increment,
  decrement,
  deleteItem,
}) => (
  <div className="cartItem">
    <img src={imgSrc} alt="cartitem" />
    <article>
      <h3>{name}</h3>
      <p>${price}</p>
    </article>
    <div>
      <button onClick={() => decrement(id)}>-</button>
      <p>{qty}</p>
      <button onClick={() => increment(id)}>+</button>
    </div>
    <AiFillDelete onClick={() => deleteItem(id)} />
  </div>
);

export default Cart;
