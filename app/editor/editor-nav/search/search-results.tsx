import React from 'react'
import type { SearchResult } from 'minisearch'
import { SimpleNote } from '@/lib/types'
import NavItem from '../nav-item'

function SearchResults({ results }: { results: SearchResult[] }) {
 return (
  <div>
   {results.map((result) => {
    const simpleNote: SimpleNote = {
     id: result.id,
     title: result.title,
    }
    return (
     <NavItem
      key={result.id}
      note={simpleNote}
      isRootChild={false}
     />
    )
   })}
  </div>
 )
}

export default SearchResults
