import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ShoppingCartDropdown = ({ isOpen, onClose }) => {
  const cart = useSelector((state) => state.cart.cart);

  return (
    <div className={`absolute right-0 mt-2 w-64 bg-white shadow-lg ${isOpen ? 'block' : 'hidden'} z-50`}>
      <div className="p-4">
        <h2 className="font-bold text-lg">Sepetim({cart.length} Ürün)</h2>
        {cart.length === 0 ? (
          <p>Sepetiniz Boş</p>
        ) : (
          cart.map((item) => (
            <div key={item.product.id} className="flex justify-between items-center py-2">
              <div className='flex'>
                <div className='w-1/3'> <img src={item.product.images[0].url}/></div>
               <div>
                <p>{item.product.name}</p>
                <p>Adet: {item.count}</p>
                <h3 className='text-primary'>{`${(item.product.price*item.count).toFixed(2)} TL`}</h3>
                </div>
              </div>
            </div>
          ))
        )}
        <div className='flex justify-between'>
        <Link to="/shoppingcart" className="block text-center mt-4 text-sm bg-primary text-white rounded w-2/5">
          Sepete Git
        </Link>
        <Link to="/order" className="block text-center mt-4 text-sm bg-primary text-white  rounded w-1/2">
          Siparişi Tamamla
        </Link>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartDropdown;