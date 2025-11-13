import { Note } from "./note";

export interface NoteBook {
    id: string;
    user_id: string;
    notebook_id?: string;
    notebook?: NoteBook;
    notes?: Note[];
    title: string;
    description: string;
    created_at: string;
    updated_at: string;
}