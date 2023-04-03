const { createStore, applyMiddleware } = require("redux");
const { fetchTodosMiddleware } = require("./middleware");

const initialState = {
  todos: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "todos/todoAdded":
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            tittle: action.payload,
          },
        ],
      };
    case "todos/todoLoaded":
      return {
        ...state,
        todos: [...state.todos, ...action.payload],
      };

    default:
      return {
        ...state,
      };
  }
};

const store = createStore(todoReducer, applyMiddleware(fetchTodosMiddleware));

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch({ type: "todos/fetchTodos" });
