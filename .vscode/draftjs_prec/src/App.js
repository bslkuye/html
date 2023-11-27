import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import {
  ContentState,
  convertToRaw,
  Editor,
  EditorState,
  RichUtils,
  Modifier,
} from "draft-js";
import "draft-js/dist/Draft.css";

function App() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const contentState = editorState.getCurrentContent();
  const rawContentState = convertToRaw(contentState);
  const contantAsText = contentState.getPlainText();

  const newText = "new Text";

  const changeText = () => {
    const newContentState = ContentState.createFromText(newText);
    const newEditorState = EditorState.createWithContent(newContentState);
    setEditorState(newEditorState);
  };

  const onChange = (newEditorState) => {
    setEditorState(newEditorState);
    console.log(contantAsText);
    getCurrentCursorPosition();
  };

  const getCurrentCursorPosition = () => {
    const selectionState = editorState.getSelection();
    const currentBlock = editorState
      .getCurrentContent()
      .getBlockForKey(selectionState.getStartKey());

    const offset = selectionState.getStartOffset();
    const currentBlockText = currentBlock.getText();
    const cursorPosition = currentBlockText.slice(0, offset).length;

    console.log("Current Cursor Position:", cursorPosition);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="editor">
          <Editor editorState={editorState} onChange={onChange} />
          <button onClick={changeText}>text change</button>
        </div>
      </header>
    </div>
  );
}

export default App;
