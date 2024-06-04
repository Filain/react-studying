import {FC, PropsWithChildren, useEffect, useState} from "react";
import {IUser} from "../../../interfaces/userInterface";
import {userService} from "../../../services/userService";
import {User} from "../User/User";
import {UserDetails} from "../UserDetails/UserDetails";

interface IProps extends PropsWithChildren {

}

const Users: FC<IProps> = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    const [userDetails, setUserDetails] = useState<IUser>(null)


    const click = async (userId: number): Promise<void> => {
        const {data} = await userService.getById(userId)
        setUserDetails(data)
        console.log(data)
    }

    useEffect(() => {
        userService.getAll().then(({data}) => setUsers(data))
    }, []);

    /*
    "State lifting" - Це процес переміщення стану (state) вгору по ієрархії компонентів, щоб зробити його доступним для інших компонентів,
    які потребують доступу до цього стану

    click={click} тут ми маємо функцію click, а кнопка знаходиться в дочірній компоненті User
    */

    return (
        <div>
            {userDetails && <UserDetails userDetails={userDetails}/>}

            {users.map(user => <User key={user.id} user={user} click={click}/>)}
        </div>
    );
};

export {Users};