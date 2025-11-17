import { Note } from "./note";

export interface Notebook {
    id: string;
    user_id: string;
    notebook_id?: string;
    notebook?: Notebook;
    notes: Note[];
    title: string;
    description: string;
    created_at: string;
    updated_at: string;
}