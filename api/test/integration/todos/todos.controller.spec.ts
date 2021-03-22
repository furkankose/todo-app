import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { AppModule } from '../../../src/modules';
import { TodosController } from '../../../src/modules/todos/todos.controller';
import * as todosData from './todos.data';

describe('TodosController', () => {
  let app: INestApplication;
  let controller: TodosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = await module.createNestApplication().init();

    controller = module.get<TodosController>(TodosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    let todo;

    beforeAll(async () => {
      todo = await controller.create(todosData.create);
    });

    afterAll(async () => {
      await controller.remove({ id: todo._id });
    });

    it('should create todo', async () => {
      expect(todo).toEqual(expect.objectContaining(todosData.create));
    });
  });

  describe('findAll', () => {
    let todos = [];

    beforeAll(async () => {
      const promises = todosData.findAll.map((todo) => controller.create(todo));
      todos = await Promise.all(promises);
    });

    afterAll(async () => {
      const promises = todos.map((todo) => controller.remove({ id: todo._id }));
      await Promise.all(promises);
    });

    it('should return todos', () => {
      for (const [i, todo] of Object.entries(todos)) {
        expect(todo).toEqual(expect.objectContaining(todosData.findAll[i]));
      }
    });
  });

  describe('findOne', () => {
    let todo;

    beforeAll(async () => {
      todo = await controller.create(todosData.create);
    });

    afterAll(async () => {
      await controller.remove({ id: todo._id });
    });

    it('should return todo', async () => {
      const result = await controller.findOne({ id: todo._id });
      expect(result.toJSON()).toEqual(todo.toJSON());
    });
  });

  describe('update', () => {
    let todo;

    beforeAll(async () => {
      todo = await controller.create(todosData.update);
    });

    afterAll(async () => {
      await controller.remove({ id: todo._id });
    });

    it('should update todo', async () => {
      const updatedTodo = { ...todosData.update, isCompleted: true };
      const result = await controller.update({ id: todo._id }, updatedTodo);

      expect(result.toJSON()).toEqual(expect.objectContaining(updatedTodo));
    });
  });

  describe('remove', () => {
    let todo;

    beforeAll(async () => {
      todo = await controller.create(todosData.remove);
    });

    it('should remove todo', async () => {
      expect(controller.remove({ id: todo._id })).resolves.toBeDefined();
    });
  });
});
