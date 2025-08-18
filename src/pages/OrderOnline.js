import React from 'react';
import '../styles/OrderOnline.css';

function OrderOnline() {
  const [cart, setCart] = React.useState([]);

  const menuItems = [
    { id: 1, name: "Salade Niçoise", price: 12.5 },
    { id: 2, name: "Ratatouille", price: 14.9 }
  ];

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <div className="order-container">
      <h2>Commander en ligne</h2>
      <div className="menu-items">
        {menuItems.map(item => (
          <div key={item.id} className="menu-item">
            <h3>{item.name}</h3>
            <p>{item.price}€</p>
            <button onClick={() => addToCart(item)}>Ajouter</button>
          </div>
        ))}
      </div>
      <div className="cart">
        <h3>Votre Panier ({cart.length})</h3>
        {cart.map((item, index) => (
          <p key={index}>{item.name} - {item.price}€</p>
        ))}
      </div>
    </div>
  );
}

export default OrderOnline;