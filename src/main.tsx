import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const messages: string[] = [
  "Hi, I'm Henry Dang",
  "I've been a software developer for around 2 years, and learned a lot.",
  "I have been and always wanted to be a part of a team that create something useful, meaningful.",
  "If you think we're on the same boat, then feel free to contact me.",
];

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App messages={messages} />
  </React.StrictMode>,
);
