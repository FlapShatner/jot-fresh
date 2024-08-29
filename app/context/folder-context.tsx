import React, { createContext, useContext, useState } from 'react';

type AreFoldersOpen = 'true' | 'false' | 'none'

interface FolderContextType {
  areFoldersOpen: AreFoldersOpen;
  expandAll: () => void;
  collapseAll: () => void;
  setNone: () => void;
}

const FolderContext = createContext<FolderContextType | null>(null);

export const FolderProvider = ({ children }: { children: React.ReactNode }) => {
  const [areFoldersOpen, setAreFoldersOpen] = useState<AreFoldersOpen>('none');

  const expandAll = () => setAreFoldersOpen('true');
  const collapseAll = () => setAreFoldersOpen('false');
  const setNone = () => setAreFoldersOpen('none');

  return (
    <FolderContext.Provider value={{ areFoldersOpen, expandAll, collapseAll, setNone }}>
      {children}
    </FolderContext.Provider>
  );
};

export const useFolderContext = () => useContext(FolderContext);