'use strict'

class NoteEditorView {
  constructor(notePostController, placeholder = "Write your note here...", buttonText = "POST-IT"){
    this._notePostController = notePostController;
    this._placeholder = placeholder;
    this._buttonText = buttonText;
  }

  createNode(){
    let textarea = this._createTextArea();
    let button = this._createButton();
    let section = this._createSection(textarea, button);
    this._setId(section);
    return section;
  }

  _createTextArea(){
    let textarea = document.createElement("TEXTAREA");
    textarea.placeholder = this._placeholder;
    return textarea;
  }

  _createButton(){
    let button = document.createElement("BUTTON");
    let text = document.createTextNode(this._buttonText);
    button.appendChild(text);
    return button;
  }

  _createSection(textarea, button){
    let section = document.createElement("SECTION");
    section.appendChild(textarea);
    section.appendChild(button);
    let controller = this._notePostController;
    button.addEventListener("click", function() {
      controller.post(textarea.value);
      textarea.value = "";
    });
    return section;
  }

  _setId(section){
    let attribute = document.createAttribute("id");
    attribute.value = "note-editor";
    section.setAttributeNode(attribute);
  }
}