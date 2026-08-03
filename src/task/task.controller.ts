import { Body, Controller, Get, Post } from '@nestjs/common';
import { TaskService } from './task.service';
import type { ITask } from './interface/task.inferface';
import { CreateTaskDto } from './dto/create-task.dto';


@Controller('task')
export class TaskController {

    constructor(private readonly taskService: TaskService) { }

    @Get()
    findAllTasks(): ITask[] {
        return this.taskService.findAllTasks();
    }


    @Post()
    createTask(@Body() createTaskDto: CreateTaskDto): ITask {
        return this.taskService.createTask(createTaskDto);
    }



}
