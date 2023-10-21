import React from "react";
import ProductCard from "./ProductCard";
import { toast } from "react-hot-toast";
import "../styles/home.scss";
import { useDispatch } from "react-redux";

const img1 =
  "https://www.reliancedigital.in/medias/Apple-MGN63HNA-Laptops-491946461-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNzczNDJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDVhL2gyZC85NDQzMDgzNTgzNTE4LmpwZ3xhYzRiNWIxZGQ2NjNiNWIyYjI0Y2ZkYTZlZWQ3MTFjZTMxYzVmNDBiNmM5Mzk5OTM2OGVkZmExMjMyYjIxNDQ4";
const img2 =
  "https://freepngimg.com/thumb/shoes/55574-6-sneakers-picture-png-file-hd.png";

const Home = () => {
  const productList = [
    {
      name: "MacBook",
      price: 12000,
      imgSrc: img1,
      id: "1",
    },
    {
      name: "Shoe",
      price: 1000,
      imgSrc: img2,
      id: "2",
    },
  ];
  const dispatch = useDispatch();
  const addToCartHandler = (options) => {
    console.log(options);
    dispatch({ type: "addToCart", payload: options });
    dispatch({ type: "calculatePrice" });
    toast.success("Added to Cart");
  };
  return (
    <div className="home">
      {productList.map((i) => (
        <ProductCard
          key={i.id}
          price={i.price}
          imgSrc={i.imgSrc}
          name={i.name}
          id={i.id}
          handler={addToCartHandler}
        />
      ))}
    </div>
  );
};

export default Home;
