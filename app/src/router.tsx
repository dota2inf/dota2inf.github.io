import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  HashRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { Provider } from "react-redux";

import store from "store/store";

import { ToastContainer, Slide } from "react-toastify";
import { init18n } from "utils/i18n.tsx";

import { Modal } from "modals/Modal";
import { TestPage } from "pages/TestPage.tsx";

import "styles/index.scss";
import { Main } from "pages/Main";
import { Patches } from "pages/Patches";
import { About } from "pages/About";
import { Heroes } from "pages/Heroes";

// init i18n
init18n();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <Modal />
      <ToastContainer
        position="top-center"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        draggable
        pauseOnHover
        theme="light"
        transition={Slide}
      />
      <HashRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/test" element={<TestPage />} />
          <Route path="/test1" element={<div>test1</div>} />
          <Route path="/patches" element={<Patches />} />
          <Route path="/heroes" element={<Heroes />} />
          <Route path="/items" element={<div>items</div>} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </HashRouter>
    </Provider>
  </StrictMode>,
);
