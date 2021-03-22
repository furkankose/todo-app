import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ObjectId } from 'mongodb';

import { Todo, TodoDocument } from './schemas/todo.schema';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Injectable()
export class TodosService {
  constructor(
    @InjectModel(Todo.name)
    private todoModel: Model<TodoDocument>,
  ) {}

  async create(createTodoDto: CreateTodoDto): Promise<TodoDocument> {
    return this.todoModel.create(createTodoDto);
  }

  async findAll(): Promise<TodoDocument[]> {
    return this.todoModel.find();
  }

  async findOne(id: ObjectId): Promise<TodoDocument> {
    const todo = await this.todoModel.findById(id);

    if (!todo) {
      throw new NotFoundException();
    }

    return todo;
  }

  async update(
    id: ObjectId,
    updateTodoDto: UpdateTodoDto,
  ): Promise<TodoDocument> {
    const todo = await this.todoModel.findByIdAndUpdate(id, updateTodoDto, {
      returnOriginal: false,
    });

    if (!todo) {
      throw new NotFoundException();
    }

    return todo;
  }

  async remove(id: ObjectId): Promise<TodoDocument> {
    const todo = await this.todoModel.findByIdAndDelete(id);

    if (!todo) {
      throw new NotFoundException();
    }

    return todo;
  }
}
