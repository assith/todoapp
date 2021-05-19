import { observable, action, computed, reaction, autorun, toJS, set } from "mobx";
import { createContext } from "react";
import uuidv4 from "uuid/v4";

export interface Todo {
  id?: string;
  title: string;
  completed: boolean;
}

export class TodoStore {
  constructor() {
    let firstRun = true;
    autorun(() => {
      if (firstRun) {
        const existingStore = window.localStorage.getItem("store");
        if (existingStore) {
          set(this, JSON.parse(existingStore));
        }
      }
      window.localStorage.setItem("store", JSON.stringify(toJS(this)));
      firstRun = false;
    })
    reaction(
      () => this.todos,
      _ => console.log(this.todos.length)
    );
  }
  
  @observable todos: Todo[] = [];


  @action addTodo = (todo: Todo) => {
    this.todos.push({ ...todo, id: uuidv4() });
    console.log(this.todos.length)
  };

  @action toggleTodo = (id: string) => {
    this.todos = this.todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed
        };
      }
      return todo;
    });
  };

  @action removeTodo = (id: string) => {
    this.todos = this.todos.filter(todo => todo.id !== id);
  };

  @computed get info() {
    return {
      total: this.todos.length,
      completed: this.todos.filter(todo => todo.completed).length,
      notCompleted: this.todos.filter(todo => !todo.completed).length
    };
  }
}

export default createContext(new TodoStore());
