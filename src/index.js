import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { AppProvider } from './context/GlobalState';
import './index.css';
import { initialState } from './context/reducer';
import { reducer } from './context/reducer'


const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <AppProvider initialState={initialState} reducer={reducer}>
        <App tab="home" />
    </AppProvider>

);