import { Note } from "../../domain/entity/note";

export interface NoteRemoteDataSource {
  getNotes(): Promise<Note[]>;
  getNoteById(id: string): Promise<Note>;
  createNote(
    title: string,
    content: string,
    createdAt: string,
    updatedAt: string
  ): Promise<Note>;
  updateNote(
    id: string,
    title: string,
    content: string,
    updatedAt: string
  ): Promise<Note>;
  deleteNoteById(id: string): Promise<boolean>;
  deleteAllNotes(): Promise<boolean>;
}

export class NoteRemoteDataSourceImpl implements NoteRemoteDataSource {
  getNotes(): Promise<Note[]> {
    throw new Error("Method not implemented.");
  }
  getNoteById(id: string): Promise<Note> {
    throw new Error("Method not implemented.");
  }
  createNote(
    title: string,
    content: string,
    createdAt: string,
    updatedAt: string
  ): Promise<Note> {
    throw new Error("Method not implemented.");
  }
  updateNote(
    id: string,
    title: string,
    content: string,
    updatedAt: string
  ): Promise<Note> {
    throw new Error("Method not implemented.");
  }
  deleteNoteById(id: string): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  deleteAllNotes(): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
}
