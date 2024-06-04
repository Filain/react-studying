import {FC, PropsWithChildren} from "react";
import {IUser} from "../../../interfaces/userInterface";

interface IProps extends PropsWithChildren {
    userDetails: IUser;

}

const UserDetails: FC<IProps> = ({userDetails}) => {
    const {id, phone, username, name, address: {city}} = userDetails;
    return (
        <div>
            <hr/>
            <div>id: {id}</div>
            <div>phone: {phone}</div>
            <div>username: {username}</div>
            <div>name: {name}</div>
            <div>city: {city}</div>
            <hr/>
        </div>
    );
};

export {UserDetails};