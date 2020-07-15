const state = {
  notes: [],
};

const getters = {
  allNotes: (state) => state.notes,
};

const actions = {
  //get all notes from local storage
  getNotes({ commit }) {
    const notes = localStorage.getItem("notes")
      ? JSON.parse(localStorage.getItem("notes"))
      : [];

    commit("setNotes", notes);
  },

  //add single note
  addNote({ commit }, note) {
    //get old notes
    const notes = localStorage.getItem("notes")
      ? JSON.parse(localStorage.getItem("notes"))
      : [];

    notes.unshift(note); //add new one
    localStorage.setItem("notes", JSON.stringify(notes)); //save

    commit("newNote", note);
  },

  //delete note
  deleteNote({ commit }, id) {
    //get all notes from local storage
    let notes = JSON.parse(localStorage.getItem("notes"));
    notes = notes.filter((note) => note.id !== id); //delete one
    localStorage.setItem("notes", JSON.stringify(notes)); //save

    commit("removeNote", id);
  },

  //update single note
  updateNote({ commit }, updatedNote) {
    //get all notes from local storage
    let notes = JSON.parse(localStorage.getItem("notes"));
    notes = notes.map(
      (note) => (note.id === updatedNote.id ? updatedNote : note) //update
    );
    localStorage.setItem("notes", JSON.stringify(notes)); //save

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
