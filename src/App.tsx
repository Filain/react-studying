import {FC, PropsWithChildren} from "react";
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {myValidator} from "./validators/validator";

interface IProps extends PropsWithChildren {

}

interface IFormData {
    firstName: string;
    price: number;
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

// 2) валідація форми

<input type={"text"} placeholder={'lastName'} {...register('lastName', {valueAsNumber: true,
min:{value: 10, message: 'min 0'},
max:{value: 100, message: 'max 100'}

minLength: { value: 2, message: "First name must be at least 2 characters long" },
maxLength: { value: 20, message: "First name must be at most 20 characters long" }



formState:{isValid} Пояснення властивостей
 - errors: Об'єкт, що містить помилки валідації для кожного поля. Наприклад, errors.firstName міститиме помилку для поля firstName, якщо воно не заповнене.
 - isDirty: Повертає true, якщо будь-яке поле форми було змінено після першого завантаження.
 - isValid: Повертає true, якщо всі поля пройшли валідацію. Може бути корисним для увімкнення/вимкнення кнопки Submit.
 - touchedFields: Об'єкт, що містить інформацію про те, які поля були торкнуті (отримали фокус). Наприклад, touchedFields.firstName буде true, якщо поле firstName було торкнуте.
 - isSubmitting: Повертає true під час обробки відправки форми.
 - isSubmitted: Повертає true, коли форма була подана.
 - isSubmitSuccessful: Повертає true, якщо форма була успішно подана.

formState:{errors} - повертає об'єкт помилок валідацією.

їх можна вивести
{errors.firstName && <p>{errors.firstName.message}</p>}
{errors.price && <p>{errors.price.message}</p>}

-------------------------------------------------------------------------------------------------------------------------------------
1) npm install @hookform/resolvers
https://www.npmjs.com/package/@hookform/resolvers
допомагає підєднати валідацію до форми

2)npm install joi
https://joi.dev/resources/changelog/

3) створюємо валідацію форми з допомогою joi
src->validators->validator.ts
робимо правила валідації
const myValidator =  Joi.object({
    firstName: Joi.string().required(),})

4) підключаємо валідацію до форми resolver: joiResolver(myValidator)
useForm<IFormData>({mode: "onSubmit", resolver: joiResolver(myValidator)})

5) тут кастомна відповідь
     firstName: Joi.string().required().min(3).messages({ "string.min": "First name must be at least 3 characters long" }),
     в переважності дають кастомне повідомлення на регулярний вираз
6) {valueAsNumber: true} - щоб форма віддавала як числа



     */
    const {register, handleSubmit, reset, formState: {isValid, errors}} = useForm<IFormData>({
        mode: "all",
        resolver: joiResolver(myValidator)
    })

    const save = (data: IFormData) => {
        console.log(data)
        reset()
    }

    return (
        <>
            <form onSubmit={handleSubmit(save)}>
                <input type={"text"} placeholder={'firstName'} {...register('firstName')}/>
                <input type={"text"} placeholder={'price'} {...register('price',{valueAsNumber: true})}/>
                <input type={"text"} placeholder={'street'} {...register('adress.street')}/>
                <input type={"text"} placeholder={'house'} {...register('adress.house')}/>

                <button disabled={!isValid}>Submit</button>
            </form>
            {errors.firstName && <p>{errors.firstName.message}</p>}
            {errors.price && <p>{errors.price.message}</p>}
            {errors.adress && <p>{errors.adress.message}</p>}




        </>
    )
};

export {App};