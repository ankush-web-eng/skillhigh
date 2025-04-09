import React, { useState } from 'react';

const ListComponent = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'Apple', isFavorite: false },
    { id: 2, name: 'Banana', isFavorite: false },
    { id: 3, name: 'Orange', isFavorite: false }
  ]);

  //* map function -> array -> goes through each item of the array and then performs a function
  //* filter function -> array -> goes through each item of the array and then performs a function and returns a new array based on the condition

  const toggleFavorite = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, isFavorite: !item.isFavorite } : item
      )
    );
  };

  const favoriteItems = items.filter(item => item.isFavorite);

  return (
    <div>
      <h3>All Items</h3>
      <ul>
        {items.map(function (i) {
          return (
            <li key={i.id}>
              {i.name}
              <button onClick={() => toggleFavorite(i.id)}>
                {i.isFavorite ? 'Unfavorite' : 'Favorite'}
              </button>
            </li>
          )
        })}
      </ul>

      <h3>Favorite Items</h3>
      <ul>
        {favoriteItems.map(function (i) {
          return (
            <li key={i.id}>
              {i.name}
              <button onClick={() => toggleFavorite(i.id)}>
                {i.isFavorite ? 'Unfavorite' : 'Favorite'}
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  );
};

export default ListComponent;
