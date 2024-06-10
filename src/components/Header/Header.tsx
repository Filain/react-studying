import {FC, PropsWithChildren} from "react";
import {NavLink, useNavigate} from "react-router-dom";
import css from './Header.module.css';

interface IProps extends PropsWithChildren {
    
}

const Header: FC<IProps> = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div>
                <div className={css.Header}>
                    <NavLink to={"/users/all"}>users</NavLink>
                    <NavLink to={"/comments"}>comments</NavLink>
                {/*NavLink має клас className='active' який визначає що є активним*/}
                </div>
                <button onClick={() => navigate(-1)}>prevPage</button>
                <button onClick={() => navigate(1)}>nextPage</button>
            </div>
        </div>
    );
};

export {Header};