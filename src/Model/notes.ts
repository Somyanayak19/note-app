export interface NotesList {
   notes: Note[];
}

export interface Note {
  id ?: number;
  title?: string;
  description?: string; 
  openModal?: boolean;
  onEditNote?: () => void ;
}