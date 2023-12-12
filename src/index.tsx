import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { ConfigProvider, theme } from "antd";

import { store } from "./app/store";
import reportWebVitals from "./reportWebVitals";
import { router } from "./utils/router";

import "./index.css";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ConfigProvider
        theme={{
          algorithm: theme.darkAlgorithm,
        }}
      >
        <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
      </ConfigProvider>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
