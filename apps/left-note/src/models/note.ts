export interface Note {
    id: string;
    notebook_id: string;
    title: string;
    description?: string;
    content: string;
    is_archived: boolean;
    created_at: string;
    updated_at: string;
}