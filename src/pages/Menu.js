import React from 'react';

function Menu() {
  const [dishes] = React.useState([
    { id: 1, name: "Bruschetta", price: 8.99 },
    { id: 2, name: "Salade Grecque", price: 10.99 }
  ]);

  return (
    <div className="menu-grid">
      {dishes.map(dish => (
        <div key={dish.id} className="dish-card">
          <h3>{dish.name}</h3>
          <p>{dish.price}€</p>
        </div>
      ))}
    </div>
  );
}

export default Menu;