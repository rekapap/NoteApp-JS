'use strict'

class NoteApp {
  constructor() {
    this._notes = [];
    this._nextId = 0;
  };

  getNotes() {
    return this._notes;
  }

  addNote(text) {
    let id = this._nextId += 1;
    let note = new Note(id, text);
    this._notes.push(note)
  }
}

function importJSFile(filename){
  let imported = document.createElement('script');
  imported.src = filename;
  document.head.appendChild(imported);
}

importJSFile("./src/note.js");
importJSFile("./src/noteEditorView.js");
importJSFile("./src/noteAppView.js");
importJSFile("./src/noteStyle.js");
importJSFile("./src/noteView.js");
importJSFile("./src/notePostController.js");

function startApp(){
  let noteapp = new NoteApp();
  let view = new NoteAppView(noteapp);
  view.render();
}
