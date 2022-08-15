// importing the app, ReactDOM and the stylesheet

import ReactDOM from 'react-dom/client';
import App from './App';
import "./style.css"

// rendering the app using ReactDOM

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);
