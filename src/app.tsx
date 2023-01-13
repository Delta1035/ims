/*
 * @Author: Delta_Zheng Delta_Zheng@wistronits.com
 * @Date: 2023-01-10 13:08:47
 * @LastEditors: Delta_Zheng Delta_Zheng@wistronits.com
 * @LastEditTime: 2023-01-13 10:24:03
 * @FilePath: \ims\src\app.tsx
 * @Description:
 *
 */
import React, { PropsWithChildren } from "react";
import { GlobalContext, GlobalContextValue } from "./context/GlobalContext";
export interface AppProps {
  children?: React.ReactNode;
}
const App: React.FC<AppProps> = (props: AppProps) => {
  const init = (value: GlobalContextValue /**这里是从全局provider拿到的值 */) => {
    return <>{props.children}</>;
  };
  return (
    <>
      <GlobalContext.Consumer>
        {(value: GlobalContextValue) => {
          return init(value);
        }}
      </GlobalContext.Consumer>
    </>
  );
};

export default App;
