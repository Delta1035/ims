/*
 * @Author: Delta_Zheng Delta_Zheng@wistronits.com
 * @Date: 2023-01-13 09:34:51
 * @LastEditors: Delta_Zheng Delta_Zheng@wistronits.com
 * @LastEditTime: 2023-01-13 10:19:01
 * @FilePath: \ims\src\context\GlobalContext.ts
 * @Description: 
 * 
 */
import React from "react";

export const GlobalContext = React.createContext({
  username:'zhansagn',
  age:23
});

export interface GlobalContextValue {
  username: string
  age:number
}
