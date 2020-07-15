const state = {
  notes: [],
};

const getters = {
  allNotes: (state) => state.notes,
};

const actions = {
  //получить группы из локальной памяти
  getNotes({ commit }) {
    const notes = localStorage.getItem("notes")
      ? JSON.parse(localStorage.getItem("notes"))
      : [];

    commit("setNotes", notes);
  },

  //добавить группу
  addNote({ commit }, note) {
    //старые карточки
    const notes = localStorage.getItem("notes")
      ? JSON.parse(localStorage.getItem("notes"))
      : [];

    notes.unshift(note); //добавление
    localStorage.setItem("notes", JSON.stringify(notes)); //сохранение

    commit("newNote", note);
  },

  //удалить группу
  deleteNote({ commit }, id) {
    //старые
    let notes = JSON.parse(localStorage.getItem("notes"));
    notes = notes.filter((note) => note.id !== id); //удалить
    localStorage.setItem("notes", JSON.stringify(notes)); //сохранить

    commit("removeNote", id);
  },

  //апдейт группы
  updateNote({ commit }, updatedNote) {
    //старые
    let notes = JSON.parse(localStorage.getItem("notes"));
    notes = notes.map(
      (note) => (note.id === updatedNote.id ? updatedNote : note) //апдейт
    );
    localStorage.setItem("notes", JSON.stringify(notes)); //сохранить

    commit("updateNote", updatedNote);
  },
};

const mutations = {
  setNotes: (state, notes) => (state.notes = notes),
  newNote: (state, note) => state.notes.unshift(note),
  removeNote: (state, id) =>
    (state.notes = state.notes.filter((note) => note.id !== id)),
  updateNote: (state, updatedNote) => {
    state.notes = state.notes.map((note) =>
      note.id === updatedNote.id ? updatedNote : note
    );
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
