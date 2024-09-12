'use client'
import React, { useState, useEffect } from 'react';
import SearchIcon from '@/app/icons/search';
import { createIndex, searchIndex } from '@/lib/lunr/indexData';
import { getNotes  } from '@/actions/note-actions';
import { getFolders } from '@/actions/folder-actions';

function Search() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<string[]>([]);
  const [index, setIndex] = useState<lunr.Index | null>(null);

  useEffect(() => {
    async function fetchData() {
      const notes = await getNotes();
      const folders = await getFolders();
      const idx = createIndex(notes, folders);
      setIndex(idx);
    }
    fetchData();
  }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => { 
    const val = e.target.value;    
    setQuery(val);
    if(val.trim() === '') {
        setResults([]);
        return;
    }
    if (index) {     
      const searchResults = searchIndex(index,val);
      setResults(searchResults);
    }
  };

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
        {results.map(result => (
          <div key={result}>{result}</div>
        ))}
      </div>
    </div>
  );
}

export default Search;