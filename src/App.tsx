import {FC, PropsWithChildren, useState} from "react";

interface IProps extends PropsWithChildren {

}

const App: FC<IProps> = () => {
    // const [state, setState] = useState<string>('initialState');
    /*
    state – це змінна, яка містить поточний стан.
    setState – це функція, яка оновлює стан.
    initialState – це початкове значення стану, яке можна передати як аргумент в useState.
    */

    // Побічні ефекти використання useState
    // 1) Перерендеринг компонента і дочірніх компонентів забезпечуючи відображення актуального стану у користувацькому інтерфейсі.
    // 2) Ізоляція стану компонента: Кожен виклик useState ізольований для окремого екземпляра компонента. Це означає,
    // що оновлення стану в одному компоненті не впливає на інші екземпляри того ж самого компонента.
    const [count, setCount] = useState<number>(0);

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    );
};

export {App};