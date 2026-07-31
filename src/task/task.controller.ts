import { Controller, Get } from '@nestjs/common';
import { TaskService } from './task.service';
import { ITask } from './interface/task.inferface';


@Controller('task')
export class TaskController {

    constructor(private readonly taskService: TaskService) { }

    @Get()
    findAllTasks(): ITask[] {
        return this.taskService.findAllTasks();
    }



}
