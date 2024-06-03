import {FC, PropsWithChildren, useState} from "react";

interface IProps extends PropsWithChildren {

}

const B: FC<IProps> = () => {
    // Functional updates Функціональні оновлення

    /*Якщо новий стан обчислюється за допомогою попереднього стану, ви можете передати функцію в setState.
    Функція отримає попереднє значення і поверне оновлене значення.
    Ось приклад компонента лічильника, який використовує цей спосіб setState:
    */

    /*
    prevCount: це попереднє значення змінної стану count.

    prevCount + 1: цей вираз обчислює нове значення змінної стану count шляхом збільшення її попереднього значення на 1.

    Підводячи підсумок, setCount(prevCount => prevCount + 1) — це спосіб безпечного оновлення стану в React,
    гарантуючи, що ваші оновлення базуються на останньому значенні стану. Це допомагає уникнути таких проблем,
    як застарілий стан або умови перегонів, які можуть виникнути під час роботи з асинхронними оновленнями стану.*/

    /*useState автоматично НЕ об'єднує об'єкти, що оновились. Ви можете це зробити
    комбінуючи функціональну форму оновлення з синтаксисом розгортання об'єктів:*/

    /*
    const [state, setState] = useState({});
          setState(prevState => {
          return {...prevState, ...updatedValues};
    });
    */


    /* TODO  useReducer !!!
      useReducer - declares a state variable with the update logic inside a reducer function.
      https://react.dev/reference/react/useReducer */


    const [count, setCount] = useState<number>(0);
    return (
        <div>
            Count: {count}
            <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
        </div>
    );
};

export {B};