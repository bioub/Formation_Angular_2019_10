import { browser, by, element } from 'protractor';

export class AppPage {
  fillTodo(text: string) {
    element(by.css('todo-form input[type="text"]')).sendKeys(text);
  }

  clickAdd() {
    element(by.css('todo-form button')).click();
  }

  getFirstTodoText() {
    return element(by.css('todo-item:first-of-type')).getText();
  }

  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
    return element(by.css('todo-root .content span')).getText() as Promise<string>;
  }
}
