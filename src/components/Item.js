import React,{useState} from "react";

function Item({ name, category }) {
  const [addToCart, setaddToCart] = useState(false)
  const handleCart=(e)=>{
    if(addToCart===false){
      setaddToCart(true)
      e.target.innerHTML="Remove From Cart"
    }
     if(addToCart===true){
      setaddToCart(false)
      e.target.innerHTML="Add to Cart"
    }
  }
  return (
    <li className={addToCart?"in-cart":""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleCart}className="add">Add to Cart</button>
    </li>
  );
}

export default Item;
