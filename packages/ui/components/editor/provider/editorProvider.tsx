import { createContext, ReactNode, useState } from 'react';

// Define a type for your context
type EditorContextType = {
  editorKey: string;
};

// Create context with a default (dummy) value
export const EditorContext = createContext<EditorContextType>({
  editorKey: '',
});

export const EditorProvider = ({
  children,
  editorKey,
}: {
  children: ReactNode;
  editorKey: string;
}) => {
  return (
    <EditorContext.Provider value={{ editorKey: editorKey }}>{children}</EditorContext.Provider>
  );
};
