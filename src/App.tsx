import {FC, PropsWithChildren} from "react";
import {useForm} from "react-hook-form";

interface IProps extends PropsWithChildren {

}

interface IFormData {
    firstName: string;
    lastName: string;
    adress: {
        street: string,
        house: string

    }

}


const App: FC<IProps> = () => {
    /*
    1) npm install react-hook-form
    2) import {useForm} from "react-hook-form";
    3) const {register, handleSubmit, reset,} = useForm<IFormData>()


handleSubmit - приймає функцію, яка буде викликана при успішному поданні форми. Ця функція отримує значення полів форми як аргумент..
reset - для скидання полів форми.
register - щоб react-hook-form міг відслідковувати його значення і валідацію.
setValue - для встановлення значення полів форми.

{...register('adress.house')} - adress.house  назва поля в вихідному обєкті

--------------------------------------------------------------------------------------------------------
//   1) useForm<IFormData>({опції})
 - mode — Метод перевірки форми перед її відправкою.
 - defaultValues — Початкові значення для полів форми.
 - values — Значення, які використовуються для динамічного оновлення полів форми.
 - errors — Об'єкт, що містить помилки валідації полів форми.
 - resetOptions — Налаштування для скидання стану форми під час оновлення значень полів.
 - shouldFocusError — Налаштування для автоматичного фокусування на полях з помилками.
 - delayError — Налаштування для затримки появи повідомлень про помилки.
 - shouldUseNativeValidation — Використання вбудованих можливостей браузера для валідації форм.
 - shouldUnregister — Налаштування для видалення реєстрації полів після їх відключення.

// 2) useForm<IFormData>({mode:"onSubmit"})

Параметр  - mode-  визначає, коли будуть виконуватися ВАЛІДАЦІЇ ФОРМИ:
 - onSubmit (за замовчуванням): валідація виконується при поданні форми.
 - onBlur: валідація виконується при втраті фокусу полем.
 - onChange: валідація виконується при зміні значення поля.
 - onTouched: валідація виконується при втраті фокусу будь-яким полем після першого натискання.
 - all: валідація виконується при будь-якій зміні, втраті фокусу або поданні форми.

     */
    const {register, handleSubmit, reset,} = useForm<IFormData>()

const save = (data: IFormData) => {
    console.log(data)
    reset()
}

    return (
        <form onSubmit={handleSubmit(save)}>
<input type={"text"} placeholder={'firstName'} {...register('firstName')}/>
<input type={"text"} placeholder={'lastName'} {...register('lastName')}/>
<input type={"text"} placeholder={'adress'} {...register('adress.street')}/>
<input type={"text"} placeholder={'adress'} {...register('adress.house')}/>

<button>Submit</button>
        </form>
    )
};

export {App};