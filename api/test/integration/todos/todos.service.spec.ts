import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { AppModule } from '../../../src/modules';
import { TodosService } from '../../../src/modules/todos/todos.service';
import * as todosData from './todos.data';
import { ObjectId } from 'mongodb';

describe('TodosService', () => {
  let app: INestApplication;
  let service: TodosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = await module.createNestApplication().init();

    service = module.get<TodosService>(TodosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    let todo;

    beforeAll(async () => {
      todo = await service.create(todosData.create);
    });

    afterAll(async () => {
      await service.remove(todo._id);
    });

    it('should create todo', async () => {
      expect(todo).toEqual(expect.objectContaining(todosData.create));
    });
  });

  describe('findAll', () => {
    let todos = [];

    beforeAll(async () => {
      const promises = todosData.findAll.map((todo) => service.create(todo));
      todos = await Promise.all(promises);
    });

    afterAll(async () => {
      const promises = todos.map((todo) => service.remove(todo._id));
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
      todo = await service.create(todosData.create);
    });

    afterAll(async () => {
      await service.remove(todo._id);
    });

    it('should throw not found exception', () => {
      const result = service.findOne(new ObjectId('6054fcadadd8282230efdd16'));
      expect(result).rejects.toBeDefined();
    });

    it('should return todo', async () => {
      const result = await service.findOne(todo._id);
      expect(result.toJSON()).toEqual(todo.toJSON());
    });
  });

  describe('update', () => {
    let todo;

    beforeAll(async () => {
      todo = await service.create(todosData.update);
    });

    afterAll(async () => {
      await service.remove(todo._id);
    });

    it('should throw not found exception', () => {
      const result = service.findOne(new ObjectId('6054fcadadd8282230efdd16'));
      expect(result).rejects.toBeDefined();
    });

    it('should update todo', async () => {
      const updatedTodo = { ...todosData.update, isCompleted: true };
      const result = await service.update(todo._id, updatedTodo);

      expect(result.toJSON()).toEqual(expect.objectContaining(updatedTodo));
    });
  });

  describe('remove', () => {
    let todo;

    beforeAll(async () => {
      todo = await service.create(todosData.remove);
    });

    it('should throw not found exception', () => {
      const result = service.findOne(new ObjectId('6054fcadadd8282230efdd16'));
      expect(result).rejects.toBeDefined();
    });

    it('should remove todo', async () => {
      expect(service.remove(todo._id)).resolves.toBeDefined();
    });
  });
});
