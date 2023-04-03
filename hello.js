const { createStore } = require("redux");

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
        todos: [...state.todos, action.payload],
      };

    default:
      return {
        ...state,
      };
  }
};

const store = createStore(todoReducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch({ type: "todos/todoAdded", payload: "Learn Redux " });
