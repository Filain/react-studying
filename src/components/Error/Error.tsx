import {FC, PropsWithChildren} from "react";

interface IProps extends PropsWithChildren {

}

const Error: FC<IProps> = () => {
    return (
        <div>
            Error ! ! !
        </div>
    );
};

export {Error};