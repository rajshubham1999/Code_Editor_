



import React, { useState } from 'react';
import Editor from 'react-simple-code-editor';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css'; // Import PrismJS CSS for styling
import 'prismjs/components/prism-javascript'; // Import the language you want to use
import './CodeEditor.css'; // Your custom styles

const CodeEditor = () => {
  const defaultCode = `import React from "react";
import ReactDOM from "react-dom";

function App() {
  return (
    <h1>Hello world</h1>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));`;

  const [code, setCode] = useState(defaultCode);

  const highlightCode = (code) => {
    return Prism.highlight(code, Prism.languages.javascript, 'javascript');
  };

  return (
    <div className="code-editor-container">
      <Editor
        value={code}
        onValueChange={(code) => setCode(code)}
        highlight={highlightCode}
        padding={10}
        style={{
          fontFamily: '"Fira code", "Fira Mono", monospace',
          fontSize: 14,
          backgroundColor: '#2d2d2d',
          color: '#f8f8f2',
          minHeight: '300px',
          overflow: 'auto',
        }}
      />
    </div>
  );
};

export default CodeEditor;
