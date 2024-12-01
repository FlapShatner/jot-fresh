import { useState, useMemo } from 'react'
import MiniSearch, { SearchResult } from 'minisearch'
import { Note } from '@/drizzle/schema'

export function useSearch(allNotes: Note[]) {
 const [results, setResults] = useState<SearchResult[]>([])

 const miniSearch = new MiniSearch({
  fields: ['title', 'content'],
  storeFields: ['id', 'title'],
 })

 const searchIndex = (query: string) => {
  console.log('searchIndex', query)
  if (query.trim() === '') {
   setResults([])
   return
  }
  miniSearch.addAll(allNotes)
  const searchResults = miniSearch.search(query)
  console.log('searchResults', searchResults)
  setResults(searchResults)
 }

 return {
  searchIndex,
  results,
 }
}