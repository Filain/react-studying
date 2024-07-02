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

/* unmount or unsubscribe
при першому рендері виконається все що є в useEffect без return
при наступному рендері в першу чергу виконається return а потім уже useEffect

        useEffect(() => {
            // actions performed when component mounts

        return () => {
            // actions to be performed when component unmounts
        }
        }, []);

        При першому


ПРИКЛАД 1
        useEffect(() => {
          let mounted = true;
          setTimeout(() => {
            if (mounted) {
              setUsername('hello world');
            }
          }, 4000);

          return () => mounted = false;
        }, []);
//Таким чином, коли компонент демонтується, змонтована змінна змінюється на false, і тому функція setUsername не буде оновлена, коли компонент демонтовано

ПРИКЛАД 2

        useEffect(() => {
          let t = setTimeout(() => {
            setUsername('hello world');
          }, 4000);

          return () => clearTimeout(t);
        }, []);

Ось приклад асинхронної функції з fetch API.

        useEffect(() => {
          let mounted = true;
          (async () => {
            const res = await fetch('example.com');
            if (mounted) {
              // only try to update if we are subscribed (or mounted)
              setUsername(res.username);
            }
          })();

          return () => mounted = false; // cleanup function
        }, []);

* */