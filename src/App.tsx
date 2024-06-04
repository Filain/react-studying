import {FC, PropsWithChildren} from "react";
import {Users} from "./components/UsersContainer/Users/Users";

interface IProps extends PropsWithChildren {

}

const App: FC<IProps> = () => {
    return (
        <div>
            {/*--------------------------AXIOS--------------------------------------------*/}
            {/*    https://axios-http.com/docs/intro  */}
            {/*    1) npm install axios               */}
            {/*    2) constants  baseURL - пишеться з великої букви                      */}
            {/*    3) interfaces                      */}
            {/*    4) services  аксіос повертає Promise<AxiosResponse<> ми робимо інтефейс IRes<>*/}

            <Users/>
        </div>
    );
};

export {App};

