/// <reference types="cypress" />
import { TodoListPage } from '../page_objects/todo_list_page.js';

describe('ToDo list', function () {
    const todoListPage = new TodoListPage();

    beforeEach(() => {
        todoListPage.navigate();
    })

    it('three new to-dos could be added', () => {
        let tasks = ["Learn JavaScript", "Learn Cypress", "Write Hello world"];

        tasks.forEach(task => todoListPage.addTodo(task));

        todoListPage.listElement().should(($lis) => {
            todoListPage.verifyTodosAmount($lis, 6);
            tasks.forEach(task => todoListPage.verifyTodosText($lis, task));
        })
    })

    it('all to-dos text could be exported', () => {
        let text = "";
        todoListPage.listElement().each(($lis) => {
            text += todoListPage.getTodoText($lis);
        }).then(() => {
            todoListPage.printText(text);
        })
    })
})