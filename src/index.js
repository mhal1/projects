import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import App from "./App";
import JavaCompile from "./JavaCompile";
import Python from "./Python";
import Demo1 from "./Demo1";
import Demo2 from "./Demo2";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <div>
            <Routes>
                <Route path='/' component={<App/>} element={<App/>} />
                <Route path='/java' component={<App/>} element={<JavaCompile/>} />
                <Route path='/python' component={<App/>} element={<Python/>} />
                <Route path='/demo1' component={<App/>} element={<Demo1/>} />
                <Route path='/demo2' component={<App/>} element={<Demo2/>} />
            </Routes>
            </div>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
