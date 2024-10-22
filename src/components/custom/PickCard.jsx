import React from 'react'
import { Card } from '../ui/card'
import { Button } from '../ui/button'

export default function PickCard() {
  return (

      <div
        className="w-full h-64 bg-cover bg-center flex items-end p-4 h-full"
        style={{
          backgroundImage: 'url(https://picsum.photos/400/300)',
        }}
      >
        <div>
          <Button className="bg-white text-black p-2 shadow-lg hover:bg-gray-100 border-none">
            Kategori ismi
          </Button>
        </div>
      </div>


  )
}
