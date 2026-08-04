import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class TaskService {
  constructor(private readonly prisma: PrismaService) { }

  async findAllTasks() {
    return this.prisma.task.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }

  async findTaskById(id: number) {
    const task = await this.prisma.task.findUnique({ where: { id } });
    if (!task) {
      throw new NotFoundException(`Task with id ${id} not found`);
    }
    return task;
  }

  async createTask(createTaskDto: CreateTaskDto) {
    return this.prisma.task.create({
      data: {
        title: createTaskDto.title,
        description: createTaskDto.description,
        completed: createTaskDto.completed ?? false,
      },
    });
  }

  async updateTask(id: number, updateTaskDto: UpdateTaskDto) {
    await this.findTaskById(id);
    return this.prisma.task.update({
      where: { id },
      data: updateTaskDto,
    });
  }

  async deleteTask(id: number) {
    await this.findTaskById(id);
    return this.prisma.task.delete({ where: { id } });
  }
}
