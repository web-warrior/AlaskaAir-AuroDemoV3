import React from 'react';
import App from './App.jsx';
import * as serviceWorker from './serviceWorker.jsx';


/* Import any web components used here */
import '@alaskaairux/auro-button';
import '@alaskaairux/auro-checkbox';
import '@alaskaairux/auro-checkbox/dist/auro-checkbox-group';
import '@alaskaairux/auro-header';
import '@aurodesignsystem/auro-input';
import "@alaskaairux/auro-radio";
import "@alaskaairux/auro-radio/dist/auro-radio-group";
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root'); /* new in v3 */
const root = createRoot(container); /* new in v3 createRoot(Container!) if you are using TypeScript */


root.render(<App tab="home" />); /* new in v3 */


serviceWorker.unregister();

