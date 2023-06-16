import React from 'react';
import './index.scss';
import App from './components/app/app';
import { createRoot } from 'react-dom/client';
import { store } from "./redux/store";
import { Provider } from "react-redux";

createRoot(document.getElementById('root')).render(
<Provider store={store}>
    <App />
</Provider>
);