import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { decreaseQuantity, removeFromCart } from "@/redux/actions/cartActions";
import { addToCart } from "@/redux/actions/thunkActions";
import {Link} from "react-router-dom";

const ShoppingCart = () => {
  {
    /*TODO: Add order cart detail*/
  }
  const cartItems = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const handleQuantityChange = (productId, increment) => {
    if (increment) {
      dispatch(addToCart({ id: productId }));
    } else {
      dispatch(decreaseQuantity(productId));
    }
  };

  const productTotal = cartItems.reduce(
    (total, item) => total + item.product.price * item.count,
    0
  );
  const shippingCost = 29.99;
  const discount = productTotal >= 150 ? -29.99 : 0;
  const total = productTotal + shippingCost + discount;

  return (
    <div className="container mx-auto py-8 ">
      <h1 className="text-2xl font-bold mb-4">
        Sepetim ({cartItems.length} Ürün)
      </h1>
      <p className="text-green-600 mb-4">
        Sepetinizdeki Ürünleri Bireysel Veya Kurumsal Fatura Seçerek
        Alabilirsiniz.
      </p>
      {cartItems.length === 0 ? (
        <p>Sepetiniz boş.</p>
      ) : (
        <div className="space-y-4 flex flex-row">
          {cartItems.map((item) => (
            <Card
              key={item.product.id}
              className="flex justify-between p-4 border border-gray-200 rounded-lg shadow-md w-2/3"
            >
              <CardContent className="flex items-center">
                <input type="checkbox" className="mr-4" />
                <img
                  src={item.product.images[0]?.url}
                  alt={item.product.name}
                  className="w-20 h-20 object-cover rounded"
                />
                <div className="ml-4 flex-1">
                  <h2 className="text-lg font-semibold">{item.product.name}</h2>
                  <p className="text-gray-600">Beden: {item.product.size}</p>
                  <p className="text-gray-600">
                    Fiyat:{" "}
                    <span className="font-bold">
                      {(item.product.price * item.count).toFixed(2)} TL
                    </span>
                  </p>
                  <p className="text-gray-600">Kargo Bedava!</p>
                  <div className="flex items-center mt-2">
                    <Button
                      onClick={() =>
                        handleQuantityChange(item.product.id, false)
                      }
                      disabled={item.count <= 1}
                      className="bg-gray-200 hover:bg-gray-300"
                    >
                      -
                    </Button>
                    <span className="mx-2">{item.count}</span>
                    <Button
                      onClick={() =>
                        handleQuantityChange(item.product.id, true)
                      }
                      className="bg-gray-200 hover:bg-gray-300"
                    >
                      +
                    </Button>
                  </div>
                  <Button
                    onClick={() => handleRemoveFromCart(item.product.id)}
                    className="ml-4 bg-primary text-red-500"
                  >
                    Sil
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
          <div className="border border-red-500 p-4 rounded-lg">
            <h2 className="text-lg font-bold mb-2">Sipariş Özeti</h2>
            <div className="flex justify-between mb-2">
              <span>Ürünün Toplamı</span>
              <span>{productTotal.toFixed(2)} TL</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Kargo Toplamı</span>
              <span>{shippingCost.toFixed(2)} TL</span>
            </div>
            {discount < 0 && (
              <div className="flex justify-between mb-2">
                <span>150 TL ve Üzeri Kargo Bedava (Satıcı Karşılar)</span>
                <span>{discount.toFixed(2)} TL</span>
              </div>
            )}
            <div className="flex justify-between font-bold">
              <span>Toplam</span>
              <span>{total.toFixed(2)} TL</span>
            </div>
            <div className="mt-4">
              <Button variant="outline" className=" w-full">
                <span className="text-primary">+</span> İNDİRİM KODUNU GİR
              </Button>
            </div>
            <div className="mt-4">
              <Link to="/order" className="bg-primary text-white w-full">
                Sepeti Onayla
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
