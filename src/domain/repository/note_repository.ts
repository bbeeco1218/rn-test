import { Note } from "../entity/note";

export interface NoteRepository {
  getNotes(): Promise<Note[]>;

  getNoteById(id: string): Note | null;

  createNote(
    title: string,
    content: string,
    createdAt: string,
    updatedAt: string
  ): Note;

  updateNote(
    id: string,
    title: string,
    content: string,
    updatedAt: string
  ): Note | null;

  deleteNoteById(id: string): boolean;

  deleteAllNotes(): boolean;
}
