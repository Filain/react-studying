import {FC, PropsWithChildren, useEffect, useState} from "react";
import {IUser} from "../../../interfaces/userInterface";
import {userService} from "../../../services/userService";
import {User} from "../User/User";

interface IProps extends PropsWithChildren {
    
}

const Users: FC<IProps> = () => {
    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        userService.getAll().then(({data})=>setUsers(data))
    }, []);


    return (
        <div>
            {users.map(user=><User key={user.id} user={user}/>)}
        </div>
    );
};

export {Users};