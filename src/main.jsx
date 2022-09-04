import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { setupStore } from "./store/store";
import "antd/dist/antd.css";
import "swiper/css";
import "./style/Style.scss";

const store = setupStore();

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
