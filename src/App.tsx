import {FC, PropsWithChildren} from "react";

interface IProps extends PropsWithChildren {

}

const App: FC<IProps> = () => {
    return (
        <div>
          {/*          1 ) npx create-react-app . --template typescript - створить проект  в пустому*/}
          {/*          2) .gitignore додаємо .idea*/}
          {/*          3) Видаляємо:*/}
          {/*                        src/App.css*/}
          {/*                        src/App.test.tsx*/}
          {/*                        src/index.css - тут під вопросом, але видаляємо*/}
          {/*                        src/logo.svg*/}
          {/*                        src/reportWebVitals.ts*/}
          {/*                        src/setupTests.ts*/}
          {/*          4) src/index.tsx*/}
          {/*                 root.render(<App/>);*/}
          {/*          5) src/App.tsx*/}
          {/*                       const App = () => {*/}
          {/*                       return (*/}
          {/*                       <div>*/}
          {/*                       App*/}
          {/*                       </div>*/}
          {/*                        );*/}
          {/*        };*/}
          {/*          export {App};*/}
          {/*          7) tsconfig.json-> "strictNullChecks": false*/}
        </div>
    );
};

export {App};