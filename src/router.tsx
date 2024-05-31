// 1
import {A} from "./Component/A";
import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayout} from "./layout/MainLayout";
import {B} from "./Component/B";

const router=createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children: [
            {index: true, element: <Navigate to={'a'}/>},
            {path: 'a', element: <A/>},
            {path: 'b', element: <B/>},
        ]
    }
]);
export {
    router
}