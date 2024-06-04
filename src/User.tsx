import {FC, PropsWithChildren} from "react";
import {IUser} from "./App";

interface IProps extends PropsWithChildren {
    user: IUser;
}

const User: FC<IProps> = ({user}) => {
    const {id, name, username, email, address, phone, website, company} = user
    return (
        <div>
            <div>{id}</div>
            <div>{name}</div>
            <div>{username}</div>
            <div>{email}</div>
            <div>{address.street}</div>
            <div>{address.suite}</div>
            <div>{address.city}</div>
            <div>{address.zipcode}</div>
            <div>{address.geo.lat}</div>
            <div>{address.geo.lng}</div>
            <div>{phone}</div>
            <div>{website}</div>
            <div>{company.name}</div>
            <div>{company.catchPhrase}</div>
            <div>{company.bs}</div>
            <br/>
            <br/>
        </div>
    );
};

export {User};