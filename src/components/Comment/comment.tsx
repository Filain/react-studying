import {FC, PropsWithChildren} from "react";
import {useLocation} from "react-router-dom";

interface IProps extends PropsWithChildren {

}

const Comment: FC<IProps> = () => {
    // Отримання доступу до значення state
    const {state} = useLocation();

    return (
        <div>
               <div>state: {state}</div>
       </div>
    );
};

export {Comment};