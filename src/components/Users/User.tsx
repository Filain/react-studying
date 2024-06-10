import {FC, PropsWithChildren} from "react";
import {IUser} from "./Users";
import {useNavigate} from "react-router-dom";

interface IProps extends PropsWithChildren {
    item: IUser
    age: number[]
}


const User: FC<IProps> = ({item, age}) => {
    const navigate = useNavigate()




    return (
        <div>
            <div>{item.id}</div>
            <div>{item.name}</div>
            <div>{age[0]}</div>
            <div>{age[1]}</div>
            <div>{age[2]}</div>
            <div>{age[3]}</div>
            <div>{age[4]}</div>
            <button onClick={() => navigate(`/comments`, {state: item.id})}>state</button>
        </div>
    );
};

export {User};