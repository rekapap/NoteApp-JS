'use strict'

class Note {
  constructor(id, text) {
    this._id = id;
    this._text = text;
  };

  getId() {
    return this._id;
  }

  getText() {
    return this._text;
  }
}
