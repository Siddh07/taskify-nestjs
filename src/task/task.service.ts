import { Injectable } from '@nestjs/common';
import { ITask } from './interface/task.inferface';

@Injectable()
export class TaskService {

    private tasks: ITask[] = [
        {
            id: '1',
            title: 'First Task',
            description: 'Learn NestJS',
            completed: false,
            createdAt: new Date(),
        },
    ];

    findAllTasks(): ITask[] {
        return this.tasks;
    }







}
