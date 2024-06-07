import {FC, PropsWithChildren} from "react";
import {IUser} from "./Users";

interface IProps extends PropsWithChildren {
    item: IUser
    age: number[]
}

const User: FC<IProps> = ({item, age}) => {
    return (
        <div>
            <div>{item.id}</div>
            <div>{item.name}</div>
            <div>{age[0]}</div>
            <div>{age[1]}</div>
            <div>{age[2]}</div>
            <div>{age[3]}</div>
            <div>{age[4]}</div>
        </div>
    );
};

export {User};