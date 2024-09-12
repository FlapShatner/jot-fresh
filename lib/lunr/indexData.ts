import lunr from 'lunr';
import { Note, Folder } from '@/drizzle/schema';

export function createIndex(notes: Note[], folders: Folder[]) {
  const index = lunr(function () {
    this.ref('id');
    this.field('title');
    this.field('content');
    this.field('name');

    notes.forEach(note => {
      this.add({
        id: note.id,
        title: note.title,
        content: note.content,
      });
    });

    // folders.forEach(folder => {
    //   this.add({
    //     id: folder.id,
    //     name: folder.name,
    //   });
    // });
  });

  return index;
}

export function searchIndex(index: lunr.Index, query: string) {
    return index.search(query).map(result => result.ref);
  }