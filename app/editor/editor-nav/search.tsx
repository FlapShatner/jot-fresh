'use client'
import React, { useState } from 'react'
import SearchIcon from '@/app/icons/search'
import { useSearch } from '@/hooks/useSearch'

function Search() {
 const [query, setQuery] = useState('')
 const { searchIndex, results } = useSearch()

 const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
  const val = e.target.value
  setQuery(val)
  searchIndex(val)
 }

 return (
  <div className='w-full bg-var-editor-bg px-1'>
   <div className='flex relative m-auto rounded-md bg-bg-secondary border border-var-editor-active mb-2 mt-1'>
    <input
     className='bg-bg-secondary transition-all w-full pl-6 rounded-md'
     type='text'
     value={query}
     onChange={handleSearch}
    />
    <SearchIcon className='text-var-magenta text-xl top-0.5 absolute left-0.5' />
   </div>
   <div>
    {results.map((result) => (
     <div key={result.id}>
      <div>{result.title}</div>
     </div>
    ))}
   </div>
  </div>
 )
}

export default Search
