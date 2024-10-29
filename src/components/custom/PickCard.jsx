import React from 'react'
import { Button } from '../ui/button'

export default function PickCard({ category, imageUrl }) {
  return (
    <div
      className="relative w-full h-full bg-cover bg-center"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    >
      <Button 
        className="absolute bottom-[1.5rem] left-[1.5rem] bg-white text-accent hover:bg-primary hover:text-white transition-colors duration-300"
      >
        {category}
      </Button>
    </div>
  )
}