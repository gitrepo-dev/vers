import React from 'react'
import Search from 'components/search'
import User from './User'
import Brand from './Brand'

export default function Header() {
  return (
    <div className="container mx-auto p-4 w-full sticky z-10 bg-white top-0">
      <div className="flex justify-between items-center w-full">
        <span className="flex items-center sm:w-3/4">
          <Brand />
          <Search />
        </span>
        <User />
      </div>
    </div>
  )
}
