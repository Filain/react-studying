/*
0.1) npx create-react-app . --template typescript - створить проект  в пустому з тайпскриптом
npx create-react-app . - без тайпскрипта
0.2) .gitignore додаємо .idea
0.3) Видаляємо:
        src/App.tsx
        src/App.css
        src/App.test.tsx
        src/index.css - тут під вопросом, але видаляємо
        src/logo.svg
        src/reportWebVitals.ts
        src/setupTests.ts


1)  npm i react-router-dom
    https://reactrouter.com/en/main/start/tutorial

2) Створюємо src/router.tsx
        const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children: [
            {index: true, element: <Navigate to={'home'}/>},
            {path: 'home', element: <UsersPage/>},
            {
                path: 'cars', element: <CarsPage/>, children: [
                    {path: 'select', element: <SelectedCarPage/>}
                ]
            },
        ]
    }
]);
export {router}


3) Підключаємо роутер в index.tsx

    const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
<RouterProvider router={router}/>
);

4) Роути ведуть Layout які в свою чергу на Pages, а ті в свою чергу на компоненти
  - {path: 'users', element: <UsersPage/>, children: [
                {path: 'all', element: <Users/>},]},
  - в компоненті UsersPage вставляємо <Outlet/>
  - даний роут http://localhost:3000/users/all

5) Navlink використовуємо для переключення між роутами
<NavLink to={'/users'}>users</NavLink>
https://reactrouter.com/en/main/components/nav-link

*/

import {createBrowserRouter, Navigate} from "react-router-dom";
import {UsersPage} from "./pages/UsersPage";
import {MainLayout} from "./Layout/MainLayout";
import {Users} from "./components/Users/Users";
import {CommentsPage} from "./pages/CommentsPage";

const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children: [
            {index: true, element: <Navigate to={'users'}/>}, //  коли користувач заходить на кореневий шлях (наприклад, example.com/), він автоматично буде перенаправлений на example.com/home.
            {path: 'users', element: <UsersPage/>, children: [
                {path: 'all', element: <Users/>},
            ]},
            {path: 'comments', element: <CommentsPage/>},

        ]
    },
])


export {router}