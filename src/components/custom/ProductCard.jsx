import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

export default function ProductCard({
  id,
  name,
  description,
  price,
  stock,
  store_id,
  category_id,
  rating,
  sell_count,
  images,
}) {
  const history = useHistory();
  const discount = 1.2;
  const colors = ["green", "yellow", "red", "blue"];
  const nameSlug = name
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-");
  const categories = useSelector((state) => state.product.categories);
  const category = categories.find((cat) => cat.id === category_id);

  const handleClick = () => {
    if (category) {
      const gender = category.gender === "k" ? "kadin" : "erkek";
      const categoryName = category.code.split(":")[1];
      const productUrl = `/shop/${gender}/${categoryName}/${category_id}/${nameSlug}/${id}`;
      history.push(productUrl);
    }
  };

  return (
    <div
      onClick={handleClick}
      className="flex flex-col cursor-pointer hover:shadow-lg transition-all duration-300"
    >
      <div className="relative w-full aspect-[3/4] overflow-hidden">
        <img
          src={images[0].url}
          alt={name}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
        />
      </div>

      <div className="flex flex-col items-center gap-[0.625rem] py-[1.5rem]">
        <h3 className="text-base font-bold text-accent">{name}</h3>
        <p className="text-sm text-secondary">{description}</p>

        <div className="flex items-center gap-[0.625rem]">
          <span className="text-base text-gray-400 line-through">
            ${(price * discount).toFixed(2)}
          </span>
          <span className="text-base font-bold text-secondary">${price}</span>
        </div>

        <div className="flex gap-[0.625rem]">
          {colors.map((color, index) => (
            <div
              key={index}
              className="w-[1rem] h-[1rem] rounded-full cursor-pointer hover:scale-110 transition-transform"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
