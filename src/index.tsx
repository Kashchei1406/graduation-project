import React from "react";
import {createRoot} from "react-dom/client";
import App from './components/App'

let element = document.getElementById('root') as HTMLElement

const root = createRoot(element)


root.render(
    <React.StrictMode>
        <App message={'It`s work'}/>
    </React.StrictMode>)
