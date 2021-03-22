import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';

import { TodoDocument } from './schemas/todo.schema';
import { TodosService } from './todos.service';

import { FindTodoParamsDto } from './dto/find-todo-params.dto';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { UpdateTodoParamsDto } from './dto/update-todo-params.dto';
import { DeleteTodoParamsDto } from './dto/delete-todo-params.dto';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Post()
  create(@Body() createTodoDto: CreateTodoDto): Promise<TodoDocument> {
    return this.todosService.create(createTodoDto);
  }

  @Get()
  findAll(): Promise<TodoDocument[]> {
    return this.todosService.findAll();
  }

  @Get(':id')
  findOne(@Param() params: FindTodoParamsDto): Promise<TodoDocument> {
    return this.todosService.findOne(params.id);
  }

  @Patch(':id')
  update(
    @Param() params: UpdateTodoParamsDto,
    @Body() updateTodoDto: UpdateTodoDto,
  ): Promise<TodoDocument> {
    return this.todosService.update(params.id, updateTodoDto);
  }

  @Delete(':id')
  remove(@Param() params: DeleteTodoParamsDto): Promise<TodoDocument> {
    return this.todosService.remove(params.id);
  }
}
