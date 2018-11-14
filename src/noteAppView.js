'use strict'

class NoteAppView {
  constructor(noteApp){
    this._noteApp = noteApp;
    this._notesSection = null;
  }

  render(){
    let container = document.getElementById("container");
    this._notesSection = document.createElement("section");
    this._renderEditor(container);
    container.appendChild(this._notesSection);
    this._renderNotes(this._notesSection);
  }

  refreshNotes(){
    let notesNode = this._notesSection;
    while (notesNode.firstChild) {
      notesNode.removeChild(notesNode.firstChild);
    }
    this._renderNotes(notesNode);
  }

  _renderEditor(container){
    let notePostController = new NotePostController(this._noteApp, this);
    let editorview = new NoteEditorView(notePostController).createNode();
    container.appendChild(editorview);
  }

  _renderNotes(container){
    //  adding section later
    let notes = this._noteApp.getNotes();
    for(let i = 0; i < notes.length ; ++i) {
      let note = notes[i];
      let noteStyle = new NoteStyle( "yellow", "black", "250px", "250px", "-10deg", "150px", "100px");
      let noteview = new NoteView(note, noteStyle);
      let noteNode = noteview.createNode();
      container.appendChild(noteNode);
    }
  }

}
