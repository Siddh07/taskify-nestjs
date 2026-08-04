import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class TaskService {
  constructor(private readonly prisma: PrismaService) { }

  // TODO: implement findAllTasks()
  // TODO: implement findTaskById(id)
  // TODO: implement createTask(dto)
  // TODO: implement updateTask(id, dto)
  // TODO: implement deleteTask(id)
}
