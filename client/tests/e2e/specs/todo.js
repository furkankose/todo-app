describe('Todo App', () => {
  const module = 'todos';
  const apiUrl = 'http://localhost:3000';
  const endpointUrl = `${apiUrl}/${module}`;

  const todoWithoutId = {
    title: 'First todo item',
    isCompleted: false,
  };

  const todo = {
    ...todoWithoutId,
    _id: '6055adcb678f6833e4058463',
  };

  beforeEach(() => {
    cy.server();
    cy.route(endpointUrl, [todo], 'GET').as('getTodos');
  });

  it('displays todo list', () => {
    cy.visit('/');
    cy.contains('.todo-list-item-text', todo.title);
  });

  it('add new todo', () => {
    cy.route('POST', endpointUrl, { ...todoWithoutId, title: 'new todo' }).as(
      'createTodo',
    );
    cy.visit('/');
    cy.get('.todo-input').type('new todo');
    cy.get('.todo-input-button').click();
    cy.wait('@createTodo');
    cy.contains('.todo-list-item-text', 'new todo');
  });

  it('complete a todo', () => {
    cy.route('PATCH', `${endpointUrl}/*`, { isCompleted: true }).as(
      'updateTodo',
    );
    cy.visit('/');
    cy.get('.checkbox').click();
    cy.wait('@updateTodo');
    cy.get('.checkbox.fa-check-square');
  });

  it('delete a todo', () => {
    cy.route('DELETE', `${endpointUrl}/*`, {}).as('deleteTodo');
    cy.visit('/');
    cy.get('.todo-list-item-button').click();
    cy.wait('@deleteTodo');
    cy.contains('span', 'Nothing to do!');
  });
});
