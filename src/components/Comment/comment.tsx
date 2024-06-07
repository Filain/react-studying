import {FC, PropsWithChildren} from "react";

interface IProps extends PropsWithChildren {

}

const Comment: FC<IProps> = () => {
    return (
        <div>
            Comment
        </div>
    );
};

export {Comment};