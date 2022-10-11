import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { StateProvider } from './context/GlobalState';
import './index.css';
import { initialState } from './context/reducer';
import { reducer } from './context/reducer'


const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <StateProvider initialState={initialState} reducer={reducer}>
        <App tab="home" />
    </StateProvider>

);