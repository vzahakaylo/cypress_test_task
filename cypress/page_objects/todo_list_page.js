export class TodoListPage {
  navigate() {
    cy.visit('http://webdriveruniversity.com/To-Do-List/index.html');
  }

  addTodo(todoText) {
    cy.get('input').type(todoText + "{enter}");
  }

  printText(text) {
    cy.log(text);
  }

  verifyTodosText(list, text) {
    expect(list).to.contain(text);
  }

  verifyTodosAmount(list, amount) {
    expect(list).to.have.length(amount);
  }

  getTodoText(element) {
    return element[0].outerText;
  }

  listElement() {
    return cy.get('ul > li');
  }
}