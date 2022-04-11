import React from 'react'
import './App.css'
import WorkflowDesigner from '@optimajet/workflow-designer-react';


function App() {
  // ---------- Parameters for Workflow Designer ---------------
  const schemeCode = "WfeTest";
  const processId = "204B2876-D749-4743-9D44-BA27BDBECC12";
  const designerConfig = {
    renderTo: 'wfdesigner',
    apiurl: 'http://localhost:5000/Designer/API',
    templatefolder: './templates/',
    widthDiff: 0,
    heightDiff: 0
  };

  return (
    <WorkflowDesigner
      schemeCode={schemeCode}
      processId={processId}
      designerConfig={designerConfig}
    />
  );
}

export default App;