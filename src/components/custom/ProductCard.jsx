import React from 'react'

export default function ProductCard() {
  
    const colors=["grey","pink","yellow","green"]
  return (
    <div className="bg-text-light text-center">
      <img src="https://picsum.photos/400/300" className="w-full" />
      <div className="p-4">
        <h3 className="text-lg font-bold">Graphic Design</h3>
        <p className="text-secondary">English Department</p>
        <div className="flex justify-center items-center">
          <p className="text-2xl font-bold p-1 text-muted line-through">
            $20.00
          </p>
          <p className="text-2xl font-bold p-1 text-secondary">
            $16.00
          </p>
        </div>
        <div className="flex justify-center items-center space-x-1">
          {colors.map((color, index) => (
            <div
              key={index}
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: color }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  )
}
