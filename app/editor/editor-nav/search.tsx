import React from 'react'
import SearchIcon from '@/app/icons/search'
function Search() {
 return (
  <div className='flex relative m-auto rounded-md bg-var-editor-active border border-var-editor-active'>
   <input
    className='bg-bg-secondary transition-all w-36 pl-6 rounded-md'
    type='text'
   />
   <SearchIcon className='text-var-magenta text-xl top-0.5 absolute left-0.5' />
  </div>
 )
}

export default Search
