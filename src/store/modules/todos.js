const state = {
  todos: [],
};

const getters = {
  allTodos: (state) => state.todos,
};

const actions = {
  //получить карточки из локальной памяти
  getTodos({ commit }) {
    const todos = localStorage.getItem("todos")
      ? JSON.parse(localStorage.getItem("todos"))
      : [];

    commit("setTodos", todos);
  },

  //добавить карточку
  addTodo({ commit }, todo) {
    const todos = localStorage.getItem("todos")
      ? JSON.parse(localStorage.getItem("todos"))
      : [];

    todos.unshift(todo); //добавление
    localStorage.setItem("todos", JSON.stringify(todos)); //сохранение

    commit("newTodo", todo);
  },

  //удалить карточку
  deleteTodo({ commit }, id) {
    //старые
    let todos = JSON.parse(localStorage.getItem("todos"));
    todos = todos.filter((todo) => todo.id !== id); //удалить
    localStorage.setItem("todos", JSON.stringify(todos)); //сохранить

    commit("removeTodo", id);
  },

  //апдейт группы
  updateTodo({ commit }, updatedTodo) {
    //старые
    let todos = JSON.parse(localStorage.getItem("todos"));
    todos = todos.map(
      (todo) => (todo.id === updatedTodo.id ? updatedTodo : todo) //апдейт
    );
    localStorage.setItem("todos", JSON.stringify(todos)); //сохранить

    commit("updateTodos", updatedTodo);
  },
};

const mutations = {
  setTodos: (state, todos) => (state.todos = todos),
  newTodo: (state, todo) => state.todos.unshift(todo),
  removeTodo: (state, id) =>
    (state.todos = state.todos.filter((todo) => todo.id !== id)),
  updateTodos: (state, updatedTodo) => {
    state.todos = state.todos.map((todo) =>
      todo.id === updatedTodo.id ? updatedTodo : todo
    );
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
