import { useState, useMemo } from 'react'
import MiniSearch, { SearchResult } from 'minisearch'
import { getNotes } from '@/actions/note-actions'
import { Note } from '@/drizzle/schema'

export function useSearch() {
 const [results, setResults] = useState<SearchResult[]>([])
 const notes = useMemo(() => getNotes(), [])
 const miniSearch = new MiniSearch({
  fields: ['title', 'content'],
  storeFields: ['id', 'title'],
 })

 const searchIndex = async (query: string) => {
  console.log('searchIndex', query)
  if (query.trim() === '') {
   setResults([])
   return
  }
  //   const notes: Note[] = await getNotes()
  miniSearch.addAll(await notes)
  const searchResults = miniSearch.search(query)
  console.log('searchResults', searchResults)
  setResults(searchResults)
 }

 return {
  searchIndex,
  results,
 }
}
