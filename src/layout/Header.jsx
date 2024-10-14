import React from 'react'
import Button from '../components/Button'

export default function Header() {
  return (
    <div>
        <div className='lg:w-full lg:bg-accent hidden lg:flex'>
            <h1>Header</h1>

            <Button icon={true} ghost={true} iconLeft={true}>
                <h6>(225) 555-0118</h6>
            </Button>
        </div>
        
    </div>
  )
}
