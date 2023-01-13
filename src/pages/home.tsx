/*
 * @Author: Delta_Zheng Delta_Zheng@wistronits.com
 * @Date: 2023-01-13 10:20:50
 * @LastEditors: Delta_Zheng Delta_Zheng@wistronits.com
 * @LastEditTime: 2023-01-13 10:24:58
 * @FilePath: \ims\src\pages\home.tsx
 * @Description: 
 * 
 */
import { GlobalContext } from '@src/context/GlobalContext'
import React, { useContext } from 'react'

export default function home() {
    const {username,age} = useContext(GlobalContext)
  return (
    <div>
        <p>name:{username}</p>
        <p>age:{age}</p>
    </div>
  )
}
