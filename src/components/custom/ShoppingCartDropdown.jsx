import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ShoppingCartDropdown = ({ isOpen, onClose }) => {
  const cart = useSelector((state) => state.cart.cart);

  return (
    <div className={`absolute right-0 mt-2 w-64 bg-white shadow-lg ${isOpen ? 'block' : 'hidden'} z-50`}>
      <div className="p-4">
        <h2 className="font-bold text-lg">Shopping Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cart.map((item) => (
            <div key={item.product.id} className="flex justify-between items-center py-2">
              <div>
                <p>{item.product.name}</p>
                <p>Count: {item.count}</p>
                <p>Price: ${item.product.price.toFixed(2)}</p>
              </div>
            </div>
          ))
        )}
        <Link to="/cart" className="block text-center mt-4 bg-primary text-white py-2 rounded">
          Go to Cart
        </Link>
      </div>
    </div>
  );
};

export default ShoppingCartDropdown;