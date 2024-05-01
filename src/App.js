import { useState,useEffect } from 'react';
import './App.css';
import Editor from './Editor.jsx';
function App() {
  const [html,setHtml]=useState("");
  const [css,setCss]=useState("");
  const [js,setJs]=useState("");
  const [srcDoc,setSrcDoc]=useState("");
  useEffect(()=>{
    const timeout=setTimeout(()=>{
      setSrcDoc(
        `<html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>`
      )
    },250)
    return ()=>clearTimeout(timeout)
  },[html,css,js])
  
  return (
    <div className="App">
      <div className='pane top-pane'>
        <Editor 
          language="xml"
          displayName="HTML"
          value={html}
          onChange={setHtml}
          />
          <Editor 
          language="css"
          displayName="CSS"
          value={css}
          onChange={setCss}
          />
          <Editor 
          language="javascript"
          displayName="JS"
          value={js}
          onChange={setJs}
          />
      </div>
      <div className='pane'>
        <iframe
          srcDoc={srcDoc}
          title='output'
          sandbox='allow-scripts'
          width="100%"
          height="100%"

        />

      </div>
    </div>
  );
}

export default App;
