import {FC, PropsWithChildren} from "react";
import {User} from "./User";

interface IProps extends PropsWithChildren {

}

export interface IUser {
    id: number
    name: string
}

const Users: FC<IProps> = () => {
    const user: IUser[] = [
        {id: 1, name: "Alex"},
        {id: 2, name: "Bob"},
        {id: 3, name: "Carrie"},
        {id: 4, name: "David"},
        {id: 5, name: "Emily"},]


    const age = [10, 20, 30, 40, 50]

    return (
        <div>

            {user.map(user => <User key={user.id} item={user} age={age}/>)}
            {/*Використання індексу елемента в масиві як ключа*/}
            {/*{user.map((user, index) => <User key={index} item={user}/>)}*/}

            {/*JSX Умовний рендеринг*/}

            {/*Логічний оператор &&*/}
            {/*{post && <Post post={post}/>}*/}
            {/*Цей код рендерить компонент Post, тільки якщо post існує (не null, undefined тощо).*/}

            {/*Використання тернарного оператора ? :*/}
            {/*{post ? <Post post={post} /> : <div>No post available</div>}*/}
            {/*Цей код рендерить компонент Post, якщо post існує, і <div>No post available</div>, якщо post не існує.*/}

            {/*Коротке замикання з ||*/}
            {/*{post || <div>No post available</div>}*/}
            {/*Цей код рендерить <div>No post available</div>, якщо post є null, undefined,
            або іншим значенням, я ке інтерпретується як хибне в контексті JavaScript.*/}



        </div>
    );
};

export {Users};