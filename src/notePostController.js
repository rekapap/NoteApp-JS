"use strict"

class NotePostController {
  constructor(noteApp, noteAppView){
    this._noteApp = noteApp;
    this._noteAppView = noteAppView;
  }

  post(text){
    if(text === ''){
      return;
    }
    this._noteApp.addNote(text);
    this._noteAppView.refreshNotes();
  }
}
