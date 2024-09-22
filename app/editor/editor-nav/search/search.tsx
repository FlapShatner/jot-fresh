'use client'
import React, { useState, useEffect } from 'react'
import SearchIcon from '@/app/icons/search'
import { useFolderContext } from '@/app/context/folder-context'
import { useSearch } from '@/hooks/useSearch'
import SearchResults from './search-results'
import { Note } from '@/drizzle/schema'

function Search({ allNotes }: { allNotes: Note[] }) {
 const [query, setQuery] = useState('')
 const { searchIndex, results } = useSearch(allNotes)
 const folderContext = useFolderContext()
 const { isShowing, setIsShowing } = folderContext ?? {}

 const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
  const val = e.target.value
  setQuery(val)
  searchIndex(val)
 }

 useEffect(() => {
  if (setIsShowing === undefined) return
  if (results.length < 1) {
   setIsShowing(true)
  }
  if (results.length > 0) {
   setIsShowing(false)
  }
 }, [results])

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
   <SearchResults results={results} />
  </div>
 )
}

export default Search
