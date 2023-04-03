// const { fetch } = require("node-fetch");

const fetch = require("node-fetch");

const fetchTodosMiddleware = (store) => (next) => async (action) => {
  if (action.type == "todos/fetchTodos") {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos?_limit=5"
    );
    const todos = await response.json();
    console.log(todos);
    store.dispatch({ type: "todos/todoLoaded", payload: todos });
    return;
  }
  return next(action);
};

module.exports = {
  fetchTodosMiddleware,
};
