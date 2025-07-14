import React from "react";
import { useCart } from "./CartContext";

const Cart: React.FC = () => {
  const { items, removeItem, clearCart } = useCart();

  if (items.length === 0) {
    return <div>Your cart is empty.</div>;
  }

  return (
    <div>
      <h2>Your Cart</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id} style={{ display: "flex", alignItems: "center", marginBottom: 8 }}>
            {item.image && (
              <img src={item.image} alt={item.name} style={{ width: 40, height: 40, marginRight: 8 }} />
            )}
            <span style={{ flex: 1 }}>{item.name} - ${item.price}</span>
            <button onClick={() => removeItem(item.id)} style={{ marginLeft: 8 }}>Delete</button>
          </li>
        ))}
      </ul>
      <button onClick={clearCart} style={{ marginTop: 16 }}>Clear Cart</button>
    </div>
  );
};

export default Cart;
