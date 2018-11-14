'use strict'

class NoteStyle {
  constructor(backgroundColor, textColor, width, height, rotation, top, left) {
    this._backgroundColor = backgroundColor;
    this._textColor = textColor;
    this._width = width;
    this._height = height;
    this._rotation = rotation;
    this._position = "fixed";
    this._top = top;
    this._left = left;
  }

  getBackgroundColor() {
    return this._backgroundColor;
  }

  getTextColor(){
    return this._textColor;
  }

  getWidth(){
    return this._width;
  }

  getHeight(){
    return this._height;
  }

  getRotation(){
    return this._rotation;
  }

  getPosition(){
    return this._position;
  }

  getTop(){
    return this._top;
  }

  getLeft(){
    return this._left;
  }

}