import {FC, PropsWithChildren, useEffect, useState} from "react";
import {User} from "./User";

interface IProps extends PropsWithChildren {

}
export interface IUser {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        };
    };
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    };
}

const App: FC<IProps> = () => {

    // useEffect - це React Hook, який дозволяє синхронізувати компонент з зовнішньою системою API.
    // Запити до серверу, підписки на зовнішні джерела даних, зміни DOM і так далі.

    /*Щоразу, коли ваш компонент рендериться, React оновлюватиме екран , а потім запускатиме код усередині useEffect.
    Іншими словами, useEffect«затримує» виконання частини коду, доки рендер не відобразиться на екрані.
    спочатку RETURN
     */
    /*
БЕЗ МАСИВУ
      useEffect(() => {
        // Це виконується після кожного рендеру
      });
ПОРОЖНІЙ МАСИВ
      useEffect(() => {
        // Це виконується лише при монтажі (коли компонент з'являється)
      }, []);
ВКАЗАНІ ЗМІННІ
      useEffect(() => {
        // Це виконується при монтажі і також, якщо змінився або a, або b з моменту останнього рендеру
      }, [a, b]);
*/
    const [users, setUsers] = useState<IUser[]>([]);

    //буде викликатися кожного разу, коли компонент буде перерисовуватися
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users').then(value => value.json()).then(items => setUsers(items))

    }, []);

    /*Якщо ваш ефект не був спричинений взаємодією (наприклад, клацанням), React зазвичай дозволить браузеру спочатку намалювати оновлений екран перед запуском вашого ефекту. Якщо ваш ефект виконує щось візуальне (наприклад, позиціонує спливаючу підказку), і затримка помітна (наприклад, він мерехтить), замініть useEffectна useLayoutEffect.*/

    return (
        <div>
            {users.map(user => <User key={user.id} user={user}/>)}
        </div>
    );
};

export {App};