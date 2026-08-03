import { Injectable } from '@nestjs/common';
import type { ITask } from './interface/task.inferface';
import { CreateTaskDto } from './dto/create-task.dto';

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


    createTask(createTaskDto: CreateTaskDto): ITask {
        const task: ITask = {
            id: Date.now().toString(),
            title: createTaskDto.title,
            description: createTaskDto.description,
            completed: createTaskDto.completed ?? false,
            createdAt: new Date(),
            updatedAt: new Date(),
        };

        this.tasks.push(task);

        return task;
    }





}
