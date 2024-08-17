import React, { useContext } from "react";
import styles from "./MealsItem.module.css";
import MealsItemForm from "./MealsItemForm";
import CartContext from "../../store/cart-context";

function MealsItem(props) {
  const cartCtx = useContext(CartContext);

  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <li className={styles.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.price}>{price}</div>
      </div>
      <MealsItemForm onAddToCart={addToCartHandler} />
    </li>
  );
}

export default MealsItem;
