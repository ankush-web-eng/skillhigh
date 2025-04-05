import React, { useState } from 'react';

const ListComponent = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'Apple', isFavorite: false },
    { id: 2, name: 'Banana', isFavorite: false },
    { id: 3, name: 'Orange', isFavorite: false }
  ]);

//   const toggleFavorite = (id) => {
//     setItems((prevItems) =>
//       prevItems.map((item) =>
//         item.id === id ? { ...item, isFavorite: !item.isFavorite } : item
//       )
//     );
//   };

//   const favoriteItems = items.filter(item => item.isFavorite);

  return (
    <div>
      <h3>All Items</h3>
      <ul>
        
      </ul>

      <h3>Favorite Items</h3>
      <ul>
        
      </ul>
    </div>
  );
};

export default ListComponent;
