import React from 'react'
import './App.css'
import WorkflowDesigner from '@optimajet/workflow-designer-react';
import el from './localization/el.json';
import elElementUILocalization from './localization/el.js';

el.elementUILocalization = elElementUILocalization;

// ---------- Parameters for Workflow Designer ---------------
const props = {
  designerConfig: {
    apiurl: 'https://demo.workflowengine.io/Designer/API',
    name: 'wfe',
    language: 'en',
    customLocalization: [el]
  },
  schemeCode: 'SimpleWF',
  loadError: error => console.error(error),
  onLoadDesigner: () => {
  },
  readOnly: false,
}

const App = () => <WorkflowDesigner {...props} />

export default App;
