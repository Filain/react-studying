import {FC, PropsWithChildren} from "react";
import {Comment} from "../components/Comment/comment";

interface IProps extends PropsWithChildren {
    
}

const CommentsPage: FC<IProps> = () => {
    return (
        <div>
            <Comment/>
        </div>
    );
};

export {CommentsPage};