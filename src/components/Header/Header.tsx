import {FC, PropsWithChildren} from "react";
import {NavLink, useNavigate} from "react-router-dom";

import css from './Header.module.css'


interface IProps extends PropsWithChildren {
    
}
/* useNavigate
 Для здійснення навігації між маршрутами у вашому додатку.
 Він є частиною бібліотеки React Router, яка використовується для створення маршрутизації в React-додатках.

 https://reactrouter.com/en/main/hooks/use-navigate

Імпорт хука:
import { useNavigate } from 'react-router-dom';

Використання хука:
const navigate = useNavigate();

Навігація:
const handleClick = () => {
  navigate('/home');
};


Навігація назад:
navigate(-1); // Перейти на один крок назад

Передача стану та параметрів:
navigate('/home', { state: { from: 'dashboard' } });
 */

const Header: FC<IProps> = () => {
    const navigates = useNavigate();

    return (
        <div>
            <div>
                <button onClick={() => navigates(-1)}>prevPage</button>
                <button onClick={() => navigates(1)}>nextPage</button>

                <div className={css.Header}>
                    <NavLink to={"/users/all"}>users</NavLink>
                    <NavLink to={"/comments"}>comments</NavLink>
                    {/*<NavLink to={"/comments"} state={{ some: "value" }}>comments</NavLink>*/}
                    {/*NavLink має клас className='active' який визначає що є активним*/}
                </div>

            </div>
        </div>
    );
};

export {Header};