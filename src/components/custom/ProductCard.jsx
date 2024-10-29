import React from 'react'

export default function ProductCard({ 
  title, 
  department, 
  oldPrice, 
  newPrice, 
  imageUrl, 
  colors 
}) {
  return (
    <div className="flex flex-col">
      <div className="relative w-full aspect-[3/4] overflow-hidden">
        <img 
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
        />
      </div>
      
      <div className="flex flex-col items-center gap-[0.625rem] py-[1.5rem]">
        <h3 className="text-base font-bold text-accent">{title}</h3>
        <p className="text-sm text-secondary">{department}</p>
        
        <div className="flex items-center gap-[0.625rem]">
          <span className="text-base text-gray-400 line-through">
            ${oldPrice.toFixed(2)}
          </span>
          <span className="text-base font-bold text-secondary">
            ${newPrice.toFixed(2)}
          </span>
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
  )
}
