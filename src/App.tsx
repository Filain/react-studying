import {FC, PropsWithChildren, useRef, useState} from "react";

interface IProps extends PropsWithChildren {

}


const App: FC<IProps> = () => {
    // оголошуємо і типізуємо наш useRef
    // він буде використовуватись для доступу до елементів форми

    const nameRef = useRef<HTMLInputElement>(null);
    const ageRef = useRef<HTMLInputElement>(null);

    const [formData, setFormData] = useState<{ name: string; age: string }>({
        name: '',
        age: '',
    });

    const save = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); // Зупиняємо автоматичне віправлення форми

        const nameValue = nameRef.current?.value ?? '';
        const ageValue = ageRef.current?.value ?? '';

        setFormData({ name: nameValue, age: ageValue });

        (event.target as HTMLFormElement).reset(); // Clear form using the DOM approach
    };
    return (
        <div>
            <form onSubmit={save}>
                <input type="text" placeholder="Name" name="name" ref={nameRef}/>
                <input type="text" placeholder="Age" name="age" ref={ageRef}/>
                <button>Save</button>
            </form>

            {/* Optionally display form data */}
            <p>Name: {formData.name}</p>
            <p>Age: {formData.age}</p>


            {/*          useRef - дозволяє зберігати значення між візуалізаціями, протягом усього життєвого циклу компонента*/
            }
            {/*    1) Доступ до DOM-елементів
                   2) Зберігати значення, які не повинні спричиняти повторне рендеринг при оновленні.

                   Як працює useRef:
                   1) useRef приймає початкове значення (необов'язково).
                   2) Він повертає об'єкт ref, який містить властивість .current.
                   3) Ця властивість .current містить поточне значення, яке ви можете змінювати.
                   4) Об'єкт ref зберігається протягом усього життєвого циклу компонента, навіть після повторного рендерингу.

                   .*/}
        </div>
    );
};

export {App};