import styles from './Cart.module.css'
import CartItem from './CartItem.jsx'
import  {useState } from "react"
import { itemsData } from './itemsData.js'
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export default function Cart () {
  const {currentProduct, setCurrentProduct, sumPrice} = useContext(CartContext);

  return (
    <section className={styles.cartContainer}>
      <h3 className={styles.cartTitle}>購物籃</h3>
      <CartItem
        currentProduct={currentProduct}
        setCurrentProduct={setCurrentProduct} />
      <hr></hr>
      <section className={styles.cartInfo}>
        <div className={styles.text}>運費</div>
        <div className={styles.price}>免費</div>
      </section>
      <hr></hr>
      <section className={styles.cartInfo}>
        <div className={styles.text}>小計</div>
        <div className={styles.price}>{sumPrice()}</div>
      </section>
    </section>
  )
}




