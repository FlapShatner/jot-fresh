import React from 'react'
import SearchIcon from '@/app/icons/search'
function Search() {
 return (
  <div className='w-full bg-var-editor-bg px-1'>
   <div className='flex relative m-auto rounded-md bg-bg-secondary border border-var-editor-active mb-2 mt-1'>
    <input
     className='bg-bg-secondary transition-all w-full pl-6 rounded-md'
     type='text'
    />
    <SearchIcon className='text-var-magenta text-xl top-0.5 absolute left-0.5' />
   </div>
  </div>
 )
}

export default Search
