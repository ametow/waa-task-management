export interface NewTask {
    name: string;
    done:boolean
}

// For tasks that have been created and assigned an ID
export interface Task extends NewTask {
    id: number;
}