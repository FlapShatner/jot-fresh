import lunr from 'lunr'
import { Note, Folder } from '@/drizzle/schema'

export function createIndex(notes: Note[]) {
 const index = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('content')
  this.field('name')

  notes.forEach((note) => {
   this.add({
    id: note.title,
    title: note.title,
    content: note.content,
   })
  })
 })

 return index
}

export function searchIndex(index: lunr.Index, query: string) {
 const wildQuery = `+${query}*~1`
 const results = index
  .search(wildQuery)
  .map((result) => ({
   ref: result.ref,
   matchData: result.matchData.metadata,
  }))
  .slice(0, 8)
 return results
}

export type SearchResult = {
 ref: string
 matchData: object
}
