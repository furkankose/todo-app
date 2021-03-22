import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiBody, ApiOkResponse, ApiParam } from '@nestjs/swagger';

import { Todo, TodoDocument } from './schemas/todo.schema';
import { TodosService } from './todos.service';

import { FindTodoParamsDto } from './dto/find-todo-params.dto';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { UpdateTodoParamsDto } from './dto/update-todo-params.dto';
import { DeleteTodoParamsDto } from './dto/delete-todo-params.dto';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @ApiOkResponse({
    type: Todo,
    description: 'Todo created successfully',
  })
  @ApiBody({
    type: CreateTodoDto,
    description: 'New todo body',
  })
  @Post()
  create(@Body() createTodoDto: CreateTodoDto): Promise<TodoDocument> {
    return this.todosService.create(createTodoDto);
  }

  @ApiOkResponse({
    type: [Todo],
    description: 'Todos found successfully',
  })
  @Get()
  findAll(): Promise<TodoDocument[]> {
    return this.todosService.findAll();
  }

  @ApiOkResponse({
    type: Todo,
    description: 'Todo found successfully',
  })
  @ApiParam({
    name: 'id',
    description: 'Todo id',
    type: 'number',
  })
  @Get(':id')
  findOne(@Param() params: FindTodoParamsDto): Promise<TodoDocument> {
    return this.todosService.findOne(params.id);
  }

  @ApiOkResponse({
    type: Todo,
    description: 'Todo updated successfully',
  })
  @ApiBody({
    type: UpdateTodoDto,
    description: 'Updated todo body',
  })
  @ApiParam({
    name: 'id',
    description: 'Todo id',
    type: 'number',
  })
  @Patch(':id')
  update(
    @Param() params: UpdateTodoParamsDto,
    @Body() updateTodoDto: UpdateTodoDto,
  ): Promise<TodoDocument> {
    return this.todosService.update(params.id, updateTodoDto);
  }

  @ApiParam({
    name: 'id',
    description: 'Todo id',
    type: 'number',
  })
  @Delete(':id')
  remove(@Param() params: DeleteTodoParamsDto): Promise<TodoDocument> {
    return this.todosService.remove(params.id);
  }
}
