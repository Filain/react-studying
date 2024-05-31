import {FC, PropsWithChildren} from "react";
import {Link, NavLink} from "react-router-dom";

interface IProps extends PropsWithChildren {
    
}

const B: FC<IProps> = () => {
    return (
        <div>
            <h1>Компонента В</h1>
            <hr/>
            <Link to={'/a'}>До компоненти A</Link>
        </div>
    );
};

export {B};