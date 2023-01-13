/*
 * @Author: Delta_Zheng Delta_Zheng@wistronits.com
 * @Date: 2023-01-10 13:33:01
 * @LastEditors: Delta_Zheng Delta_Zheng@wistronits.com
 * @LastEditTime: 2023-01-13 10:46:53
 * @FilePath: \ims\src\router.tsx
 * @Description:
 *
 */
import React from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "./pages/home";


// import About from "./components/about";
// import ErrorPage from "./components/error.page";
// import Login from "./components/login";
// import Register from "./components/register";
// import ArticleManage from "./pages/cms/article-manage/article-manage.page";
// import Article from "./pages/cms/article-manage/article/article";
// import Draft from "./pages/cms/article-manage/draft/draft.page";
// import Edit from "./pages/cms/article-manage/edit/edit.page";
// import Category from "./pages/cms/category/category.page";
// import CMS from "./pages/cms/cms.page";
// import Tags from "./pages/cms/tag/tag.page";
// import Home from "./pages/home/home.page";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Navigate to={"/home"} />,
//     errorElement: <ErrorPage />,
//   },
//   {
//     path: "/about",
//     element: <About />,
//   },
//   {
//     path: "/cms",
//     element: <CMS />,
//     children: [
//       {
//         path: "",// 默认导航
//         element: <Navigate to={"article-manage"} />,
//       },
//       { // 注意 子路由不要写前缀/ 
//         path: "article-manage",
//         element: <ArticleManage />,
//         children: [
//           {
//             path: "edit",
//             element: <Edit />,
//             // index: true,
//           },
//           {
//             path: "draft",
//             element: <Draft />,
//           },
//           {
//             path: "article",
//             element: <Article />,
//           },
//         ],
//       },
//       {
//         path: "category",
//         element: <Category />,
//       },
//       {
//         path: "tags",
//         element: <Tags />,
//       },
//       {
//         path: "three",
//         element: <Three />,
//       },
//     ],
//   },
//   {
//     path: "/home",
//     element: <Home />,
//   },
// ]);
const router = createBrowserRouter([
  {
    path:'/',
    element:<Navigate to={'/home'}></Navigate>
  },
  {
    path:'/home',
    element:<Home></Home>
  }
])
export default router;
