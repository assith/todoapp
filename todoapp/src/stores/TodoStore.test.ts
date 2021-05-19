import { TodoStore } from "./TodoStore";

describe ("TodoStore", () => {
  it("creates new todos", () => {
    const store = new TodoStore;
    store.addTodo({title: "Todo 1", completed: false});
    store.addTodo({title: "Todo 2", completed: false});
    store.addTodo({title: "Todo 3", completed: false});
    expect(store.todos.length).toBe(3);
    expect(store.todos[0].title).toBe("Todo 1")
    expect(store.todos[1].title).toBe("Todo 2")
    expect(store.todos[2].title).toBe("Todo 3")
  })
})