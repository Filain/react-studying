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

register - щоб react-hook-form міг відслідковувати його значення і валідацію.
handleSubmit - приймає функцію, яка буде викликана при успішному поданні форми. Ця функція отримує значення полів форми як аргумент..
reset - для скидання полів форми.

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