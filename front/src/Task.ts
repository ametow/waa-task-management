// Define Task type in taskService.ts or a types file
export interface Task {
    id?: number;  // Optional for new tasks
    name: string;
    done: boolean;
}
