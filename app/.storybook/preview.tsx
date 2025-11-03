import { Provider } from "react-redux";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from "react";
import {
  BrowserRouter as Router
} from "react-router-dom";
import { store } from "../src/store/store";
import "../src/styles/index.scss";
import "./storybook.css";
import { init18n } from "../src/utils/i18n";

init18n();

export const decorators = [
  (Story: any) => (
    <Provider store={store}>
      <Router>
        <Story />
      </Router>
    </Provider>
  ),
];
