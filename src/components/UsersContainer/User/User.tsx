import {FC, PropsWithChildren} from "react";
import {IUser} from "../../../interfaces/userInterface";

interface IProps extends PropsWithChildren {
    user: IUser
    click: (id: number) => Promise<void>

}

const User: FC<IProps> = ({user, click}) => {
    const {id, name, username, email, phone} = user
    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>username: {username}</div>
            <div>email: {email}</div>
            <div>phone: {phone}</div>
            <button onClick={() => click(id)}>Details</button>
            <br/>
        </div>
    );
};

export {User};