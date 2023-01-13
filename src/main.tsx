/*
 * @Author: Delta_Zheng Delta_Zheng@wistronits.com
 * @Date: 2023-01-10 09:21:02
 * @LastEditors: Delta_Zheng Delta_Zheng@wistronits.com
 * @LastEditTime: 2023-01-13 10:28:02
 * @FilePath: \ims\src\main.tsx
 * @Description:
 *
 */
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import { GlobalContext } from "./context/GlobalContext";
import App from "./app";
window.addEventListener("error", (error) => {
  console.log("window", error);
});

ReactDOM.createRoot(
  document.getElementById("root") ?? new DocumentFragment()
).render(
  // <React.StrictMode>
  <GlobalContext.Provider value={{ username: "delta", age: 25 }}>
    <App>
      <RouterProvider router={router} />
    </App>
  </GlobalContext.Provider>
  // </React.StrictMode>
);
