'use strict'

class NoteView{
  constructor(note, noteStyle) {
    this._note = note;
    this._noteStyle = noteStyle;
  };

  createNode() {
    let paragraph = this._createParagraph();
    let noteNode = this._createArticle(paragraph);
    this._setStyle(noteNode);
    this._setClass(noteNode);
    this._setId(noteNode);
    return noteNode;
  }

  _createParagraph(){
    let paragraph = document.createElement("p");
    let text = document.createTextNode(this._note.getText());
    paragraph.appendChild(text);
    return paragraph;
  }

  _createArticle(paragraph){
    let noteNode = document.createElement("article");
    noteNode.appendChild(paragraph);
    return noteNode;
  }

  _setStyle(noteNode){
    noteNode.style = {};
    noteNode.style.color = this._noteStyle.getTextColor();
    noteNode.style.backgroundColor = this._noteStyle.getBackgroundColor();
    noteNode.style.width = this._noteStyle.getWidth();
    noteNode.style.height = this._noteStyle.getHeight();
    noteNode.style.position = this._noteStyle.getPosition();
    noteNode.style.top = this._noteStyle.getTop();
    noteNode.style.left = this._noteStyle.getLeft();
    let transform = "rotate(" + this._noteStyle.getRotation() + ")";
    noteNode.style.transform =  transform;
  }

  _setClass(noteNode){
    let attribute = document.createAttribute("class");
    attribute.value = "note";
    noteNode.setAttributeNode(attribute);
  }

  _setId(noteNode){
    let attribute = document.createAttribute("id");
    attribute.value = "note-" + this._note.getId();
    noteNode.setAttributeNode(attribute);
  }
}