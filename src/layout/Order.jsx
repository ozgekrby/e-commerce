import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { addAddressth, deleteAddress, editAddressth, fetchAddress } from "@/redux/actions/thunkActions";
import { useForm } from "react-hook-form";

export default function Order() {
  const dispatch = useDispatch();
  const [addAddress, setAddAddress] = useState(false);
  const [editAddressId, setEditAddressId] = useState(null); 
  const cartItems = useSelector((state) => state.cart.cart);
  const addressList = useSelector((state) => state.client.addressList);
  const productTotal = cartItems.reduce(
    (total, item) => total + item.product.price * item.count,
    0
  );
  const shippingCost = 29.99;
  const discount = productTotal >= 150 ? -29.99 : 0;
  const total = productTotal + shippingCost + discount;

  useEffect(() => {
    dispatch(fetchAddress());
  }, [dispatch]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const formattedData = {
      title: data.title,
      name: data.name,
      surname: data.surname,
      phone: data.phone,
      city: data.city,
      district: data.district,
      neighborhood: data.neighborhood,
      address: data.address,
    };

    dispatch(addAddressth(formattedData));
    reset(); 
  };

  const onEditSubmit = (data, id) => {
    const editData = {
      id: id,
      title: data.title,
      name: data.name,
      surname: data.surname,
      phone: data.phone,
      city: data.city,
      district: data.district,
      neighborhood: data.neighborhood,
      address: data.address,
    };

    dispatch(editAddressth(editData));
    setEditAddressId(null); 
  };

  const handleEditClick = (item) => {
    reset({ 
      title: item.title,
      name: item.name,
      surname: item.surname,
      phone: item.phone,
      city: item.city,
      district: item.district,
      neighborhood: item.neighborhood,
      address: item.address,
    });
    setEditAddressId(item.id); 
  };

  const handleDeleteClick = (id) => {
    dispatch(deleteAddress(id));
  };

  return (
    <div className="flex flex-col lg:flex-row lg:justify-between p-6 space-y-8 lg:space-y-0">
      <section className="w-full lg:w-3/4 space-y-6">
        <Tabs defaultValue="address">
          <TabsList className="flex space-x-4 border-b border-gray-200 mb-4">
            <TabsTrigger
              value="address"
              className="py-2 px-4 text-lg font-medium text-orange-500 border-b-2 border-transparent hover:border-orange-500"
            >
              Adres Bilgileri
            </TabsTrigger>
            <TabsTrigger
              value="payment"
              className="py-2 px-4 text-lg font-medium text-orange-500 border-b-2 border-transparent hover:border-orange-500"
            >
              Ödeme Seçenekleri
            </TabsTrigger>
          </TabsList>

          <TabsContent
            value="address"
            className="bg-white rounded-lg p-6 shadow"
          >
            <h1 className="text-xl font-semibold mb-4">Teslimat Adresi</h1>
            <Button
              variant="outline"
              className="w-full border border-orange-500 text-orange-500 mb-4"
              onClick={() => setAddAddress(!addAddress)}
            >
              <span className="text-primary">+</span> Yeni Adres Ekle
            </Button>
            {addAddress && (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="p-4 space-y-4 bg-white shadow-md rounded"
              >
                <div>
                  <label htmlFor="title" className="block mb-1 font-semibold">
                    Address Title
                  </label>
                  <input
                    id="title"
                    {...register("title", {
                      required: "Address title is required",
                    })}
                    className="w-full px-3 py-2 border border-gray-300 rounded"
                    placeholder="Address Title"
                  />
                  {errors.title && (
                    <p className="text-red-500 text-sm">
                      {errors.title.message}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="name" className="block mb-1 font-semibold">
                    Name
                  </label>
                  <input
                    id="name"
                    {...register("name", { required: "Name is required" })}
                    className="w-full px-3 py-2 border border-gray-300 rounded"
                    placeholder="Name"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="surname" className="block mb-1 font-semibold">
                    Surname
                  </label>
                  <input
                    id="surname"
                    {...register("surname", {
                      required: "Surname is required",
                    })}
                    className="w-full px-3 py-2 border border-gray-300 rounded"
                    placeholder="Surname"
                  />
                  {errors.surname && (
                    <p className="text-red-500 text-sm">
                      {errors.surname.message}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block mb-1 font-semibold">
                    Phone
                  </label>
                  <input
                    id="phone"
                    {...register("phone", {
                      required: "Phone is required",
                      pattern: {
                        value: /^[0-9]{10}$/,
                        message: "Enter a valid 10-digit phone number",
                      },
                    })}
                    className="w-full px-3 py-2 border border-gray-300 rounded"
                    placeholder="Phone"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm">
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="city" className="block mb-1 font-semibold">
                    City
                  </label>
                  <select
                    id="city"
                    {...register("city", { required: "City is required" })}
                    className="w-full px-3 py-2 border border-gray-300 rounded"
                  >
                    <option value="">Select City</option>
                    <option value="istanbul">Istanbul</option>
                  </select>
                  {errors.city && (
                    <p className="text-red-500 text-sm">
                      {errors.city.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="district"
                    className="block mb-1 font-semibold"
                  >
                    District
                  </label>
                  <input
                    id="district"
                    {...register("district", {
                      required: "District is required",
                    })}
                    className="w-full px-3 py-2 border border-gray-300 rounded"
                    placeholder="District"
                  />
                  {errors.district && (
                    <p className="text-red-500 text-sm">
                      {errors.district.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="neighborhood"
                    className="block mb-1 font-semibold"
                  >
                    Neighborhood
                  </label>
                  <input
                    id="neighborhood"
                    {...register("neighborhood", {
                      required: "Neighborhood is required",
                    })}
                    className="w-full px-3 py-2 border border-gray-300 rounded"
                    placeholder="Neighborhood"
                  />
                  {errors.neighborhood && (
                    <p className="text-red-500 text-sm">
                      {errors.neighborhood.message}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="address" className="block mb-1 font-semibold">
                    Address
                  </label>
                  <textarea
                    id="address"
                    {...register("address", {
                      required: "Address details are required",
                    })}
                    className="w-full px-3 py-2 border border-gray-300 rounded"
                    placeholder="Street, Building, Door Numbers"
                  ></textarea>
                  {errors.address && (
                    <p className="text-red-500 text-sm">
                      {errors.address.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
                >
                  Add Address
                </button>
              </form>
            )}
            <div className="space-y-4">
              {addressList?.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center border rounded-md p-4 shadow-sm"
                >
                  <input
                    id={`address-${index}`}
                    type="radio"
                    name="address"
                    className="mr-2"
                    value={index}
                  />
                  <label htmlFor={`address-${index}`} className="flex-grow">
                    <p>{item.address}</p>
                  </label>
                  <Button
                    variant="outline"
                    className="text-sm border border-gray-300 text-gray-700"
                    onClick={() => handleEditClick(item)} 
                  >
                    Düzenle
                  </Button>
                  {editAddressId === item.id && ( 
                    <form
                      onSubmit={handleSubmit((data) => onEditSubmit(data, item.id))}
                      className="p-4 space-y-4 bg-white shadow-md rounded"
                    >
                      <div>
                        <label htmlFor="title" className="block mb-1 font-semibold">
                          Address Title
                        </label>
                        <input
                          id="title"
                          defaultValue={item.title}
                          {...register("title")}
                          className="w-full px-3 py-2 border border-gray-300 rounded"
                        />
                      </div>

                      <div>
                        <label htmlFor="name" className="block mb-1 font-semibold">
                          Name
                        </label>
                        <input
                          id="name"
                          defaultValue={item.name}
                          {...register("name")}
                          className="w-full px-3 py-2 border border-gray-300 rounded"
                        />
                      </div>

                      <div>
                        <label htmlFor="surname" className="block mb-1 font-semibold">
                          Surname
                        </label>
                        <input
                          id="surname"
                          defaultValue={item.surname}
                          {...register("surname")}
                          className="w-full px-3 py-2 border border-gray-300 rounded"
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block mb-1 font-semibold">
                          Phone
                        </label>
                        <input
                          id="phone"
                          defaultValue={item.phone}
                          {...register("phone")}
                          className="w-full px-3 py-2 border border-gray-300 rounded"
                        />
                      </div>

                      <div>
                        <label htmlFor="city" className="block mb-1 font-semibold">
                          City
                        </label>
                        <input
                          id="city"
                          defaultValue={item.city}
                          {...register("city")}
                          className="w-full px-3 py-2 border border-gray-300 rounded"
                        />
                      </div>

                      <div>
                        <label htmlFor="district" className="block mb-1 font-semibold">
                          District
                        </label>
                        <input
                          id="district"
                          defaultValue={item.district}
                          {...register("district")}
                          className="w-full px-3 py-2 border border-gray-300 rounded"
                        />
                      </div>

                      <div>
                        <label htmlFor="neighborhood" className="block mb-1 font-semibold">
                          Neighborhood
                        </label>
                        <input
                          id="neighborhood"
                          defaultValue={item.neighborhood}
                          {...register("neighborhood")}
                          className="w-full px-3 py-2 border border-gray-300 rounded"
                        />
                      </div>

                      <div>
                        <label htmlFor="address" className="block mb-1 font-semibold">
                          Address
                        </label>
                        <textarea
                          id="address"
                          defaultValue={item.address}
                          {...register("address")}
                          className="w-full px-3 py-2 border border-gray-300 rounded"
                        ></textarea>
                      </div>

                      <button
                        type="submit"
                        className="w-full py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
                      >
                        Update Address
                      </button>
                      <button
                        type="submit"
                        className="w-full py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
                        onClick={() => handleDeleteClick(item.id)}

                      >
                        Delete
                      </button>
                    </form>
                  )}
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent
            value="payment"
            className="bg-white rounded-lg p-6 shadow"
          >
            <h1 className="text-xl font-semibold mb-4">Ödeme Bilgileri</h1>
            <p>
              Bank/Kredi Kartı veya Alışveriş Kredisi ile ödemenizi güvenle
              yapabilirsiniz.
            </p>
          </TabsContent>
        </Tabs>
      </section>

      <aside className="w-full lg:w-1/4 border border-gray-300 p-6 rounded-lg shadow">
        <h2 className="text-lg font-bold mb-4">Sipariş Özeti</h2>
        <div className="flex justify-between mb-2 text-sm">
          <span>Ürünün Toplamı</span>
          <span>{productTotal.toFixed(2)} TL</span>
        </div>
        <div className="flex justify-between mb-2 text-sm">
          <span>Kargo Toplamı</span>
          <span>{shippingCost.toFixed(2)} TL</span>
        </div>
        {discount < 0 && (
          <div className="flex justify-between mb-2 text-sm text-green-500">
            <span>150 TL ve Üzeri Kargo Bedava (Satıcı Karşılar)</span>
            <span>{discount.toFixed(2)} TL</span>
          </div>
        )}
        <div className="flex justify-between font-semibold text-lg mt-4">
          <span>Toplam</span>
          <span>{total.toFixed(2)} TL</span>
        </div>
        <div className="mt-6">
          <Button
            variant="outline"
            className="w-full border border-orange-500 text-orange-500"
          >
            <span className="text-primary">+</span> İNDİRİM KODUNU GİR
          </Button>
        </div>
        <div className="mt-4">
          <Link
            to="/order"
            className="bg-orange-500 hover:bg-orange-600 text-white w-full block text-center py-2 rounded-lg font-semibold"
          >
            Sepeti Onayla
          </Link>
        </div>
      </aside>
    </div>
  );
}