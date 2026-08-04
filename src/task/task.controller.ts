import { Controller } from '@nestjs/common';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  // TODO: @Get()        findAllTasks()
  // TODO: @Get(':id')   findTaskById()
  // TODO: @Post()       createTask()
  // TODO: @Patch(':id') updateTask()
  // TODO: @Delete(':id') deleteTask()
}
