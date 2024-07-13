import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { DatabaseService } from 'src/database/database.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class TodoService {
  constructor(private readonly databaseService: DatabaseService) {}
  async create(createTodoDto: CreateTodoDto, email: string) {
    try {
      const user = await this.databaseService.user.findUnique({
        where: { email },
      });
      if (!user) {
        throw new Error('User not found');
      }
      let data: Prisma.ToDoCreateInput = {
        description: createTodoDto.description,
        task: createTodoDto.task,
        status: 'Active',
        user: {
          connect: { email: user.email },
        },
      };
      console.log(data);
      return await this.databaseService.toDo.create({ data });
    } catch (err) {
      return err;
    }
  }

  async findAll(userEmail: string) {
    return await this.databaseService.toDo.findMany({
      where: {
        userEmail: userEmail,
      },
    });
  }

  async findOne(id: number) {
    return this.databaseService.toDo.findFirst({
      where: {
        id: id,
      },
    });
  }

  async update(id: number, updateTodoDto: UpdateTodoDto) {
    return this.databaseService.toDo.update({
      where: {
        id: id,
      },
      data: updateTodoDto,
    });
  }

  async remove(id: number) {
    return this.databaseService.toDo.delete({
      where: {
        id: id,
      },
    });
  }
}
