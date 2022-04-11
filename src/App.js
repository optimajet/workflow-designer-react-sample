import React from 'react'
import './App.css'
import WorkflowDesigner from '@optimajet/workflow-designer-react';


function App() {
  // ---------- Parameters for Workflow Designer ---------------
  const schemeCode = "SimpleWF";
  const processId = "";
  const designerConfig = {
    renderTo: 'wfdesigner',
    apiurl: 'https://workflowengine.io/demo/Designer/API',
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
