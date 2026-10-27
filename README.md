# Workflow Engine by Optimajet React Designer sample

This sample embeds Workflow Designer in a React application.
The release archive pins its Workflow Designer dependencies to the packaged release. Framework versions are listed in
`package.json` and locked in `package-lock.json`.

## Prerequisites

- Node.js 24.22.0 and npm.
- A running Workflow Engine Designer API. Follow the
  [backend installation guide](https://docs.workflowengine.io/get-started/install-workflow-engine/).

## Configure the sample

In `src/App.js`, set `apiurl` to your backend's Designer endpoint, for example
`http://localhost:5274/workflow-api/designer`. Set `schemeCode` (`schemecode` in the JavaScript data object)
to the scheme to open. The supplied demo configuration uses `SimpleWF`.

The checked-in configuration points to the public demo. Use your own backend for application data.
Configure backend CORS for your frontend origin and apply your application's authentication and scheme access rules.

## Run the sample

From this sample directory:

```bash
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000).
The Designer opens the selected scheme, or creates a new scheme when the backend does not contain it.

## Build for hosting

```bash
npm run build
```

## Documentation and support

- [Designer integration](https://docs.workflowengine.io/get-started/integrate-the-designer/)
- [Release notes](https://docs.workflowengine.io/release-notes/)
- [Workflow Engine source and issues](https://github.com/optimajet/WorkflowEngine.NET)
- Technical questions: [support@optimajet.com](mailto:support@optimajet.com)

Workflow Designer is distributed under the Workflow Engine EULA included in its npm package as `LICENSE.md`.
Workflow Engine Free includes the full Designer within its limits and attribution terms.
