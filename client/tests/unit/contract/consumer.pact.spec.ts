import { pactWith } from 'jest-pact';
import { Matchers } from '@pact-foundation/pact';
import axios from 'axios';
import httpAdapter from 'axios/lib/adapters/http';
import { ApiService } from '@/api/serviceFactory';

axios.defaults.adapter = httpAdapter;
const { eachLike, like } = Matchers;

pactWith({ consumer: 'TodoConsumer', provider: 'TodoProvider' }, provider => {
  let TodoService: ApiService;
  const MIN_TODOS = 2;

  const todoWithoutId = {
    title: 'First todo item',
    isCompleted: true,
  };

  const todo = {
    ...todoWithoutId,
    _id: '6055adcb678f6833e4058463',
  };

  beforeAll(() => {
    TodoService = new ApiService('todos', provider.mockService.baseUrl);
  });

  describe('/todos [POST]', () => {
    beforeAll(() =>
      provider.addInteraction({
        state: 'is ready to create a new todo',
        uponReceiving: 'a request to create a new todo',
        withRequest: {
          method: 'POST',
          path: '/todos',
          body: like(todoWithoutId),
          headers: {
            'Content-Type': 'application/json',
          },
        },
        willRespondWith: {
          status: 200,
          headers: {
            'Content-Type': 'application/json',
          },
          body: like(todo),
        },
      }),
    );

    it('returns the created todo', async () => {
      const todo = await TodoService.create(todoWithoutId);
      expect(todo).toEqual(todo);
    });
  });

  describe('/todos [GET]', () => {
    beforeAll(() =>
      provider.addInteraction({
        state: 'Has some todos',
        uponReceiving: 'a request for all todos',
        withRequest: {
          method: 'GET',
          path: '/todos',
        },
        willRespondWith: {
          status: 200,
          headers: {
            'Content-Type': 'application/json; charset=utf-8',
          },
          body: eachLike(todo, { min: MIN_TODOS }),
        },
      }),
    );

    it('returns todos', async () => {
      const returnedTodos = await TodoService.getAll();
      expect(returnedTodos.length).toBeGreaterThanOrEqual(MIN_TODOS);
      expect(returnedTodos[0]).toEqual(todo);
    });
  });

  describe('/todos/:id [GET]', () => {
    beforeAll(() =>
      provider.addInteraction({
        state: 'Has a todo',
        uponReceiving: 'a request for spesific todo',
        withRequest: {
          method: 'GET',
          path: '/todos/6055adcb678f6833e4058463',
        },
        willRespondWith: {
          status: 200,
          headers: {
            'Content-Type': 'application/json; charset=utf-8',
          },
          body: like(todo),
        },
      }),
    );

    it('returns todo', async () => {
      const returnedTodo = await TodoService.get('6055adcb678f6833e4058463');
      expect(returnedTodo).toEqual(todo);
    });
  });

  describe('/todos/:id [PATCH]', () => {
    beforeAll(() =>
      provider.addInteraction({
        state: 'is ready to update a spesific todo',
        uponReceiving: 'a request to update a spesific todo',
        withRequest: {
          method: 'PATCH',
          path: '/todos/6055adcb678f6833e4058463',
          body: like(todo),
          headers: {
            'Content-Type': 'application/json',
          },
        },
        willRespondWith: {
          status: 200,
          headers: {
            'Content-Type': 'application/json',
          },
          body: like(todo),
        },
      }),
    );

    it('returns the updated todo', async () => {
      const updatedTodo = await TodoService.update(
        '6055adcb678f6833e4058463',
        todo,
      );
      expect(updatedTodo).toEqual(todo);
    });
  });

  describe('/todos/:id [DELETE]', () => {
    beforeAll(() =>
      provider.addInteraction({
        state: 'is ready to removed a spesific todo',
        uponReceiving: 'a request to removed a spesific todo',
        withRequest: {
          method: 'DELETE',
          path: '/todos/6055adcb678f6833e4058463',
        },
        willRespondWith: {
          status: 200,
          headers: {
            'Content-Type': 'application/json',
          },
          body: like(todo),
        },
      }),
    );

    it('returns the removed todo', async () => {
      const removedTodo = await TodoService.remove('6055adcb678f6833e4058463');
      expect(removedTodo).toBeDefined();
    });
  });
});
