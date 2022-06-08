import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBar } from "./components/navbar";
import { About } from "./components/about";
import { Feedback } from "./components/feedback";
import { Updates } from "./components/updates";
import { store } from './app/store'
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="updates" element={<Updates />}></Route>
        <Route path="feedback" element={<Feedback />}></Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);
