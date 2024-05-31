import {FC, PropsWithChildren, useState} from "react";
import {Link, useSearchParams} from "react-router-dom";

interface IProps extends PropsWithChildren {

}

/*
1)      npm install react-router-dom
2)      налаштувати роутер


useSearchParams     - Хук для отримання та зміни параметрів запиту.
Імпорт хуків 	    - import { useSearchParams } from 'react-router-dom';
Читання параметрів 	- const [searchParams, setSearchParams] = useSearchParams();
Отримання значень 	- const par= searchParams.get('query'); // Отримати значення 'query'
Зміна параметрів 	- setSearchParams({ query: 'нове значення' });
prev	            - дозволяє оновлювати параметри запиту на основі попередніх значень.
                      У цьому випадку prev допомагає забезпечити коректну роботу з поточними параметрами.

*/

const A: FC<IProps> = () => {
    const [query, setQuery] = useSearchParams();

 //  setQuery6 та setQuery7
    const [queryPrint, setQueryPrint] = useState<string>('')
    const [queryPrintMany, setQueryPrintMany] = useState<string[]>([''])
    //  функції setQuery6 та setQuery7 викликаються під час фази рендерингу компонента, що означає,
    //  що їх результати негайно відображаються кожен раз, коли компонент знову рендериться.
    //  Це призводить до оновлення виводу кожного разу, коли змінюється стан компонента,
    //  включаючи кожне натискання на кнопку. Треба useState

// Встановлення значення параметра 'name'
    function setQuery1() {
        setQuery({name: 'firstName'});
    }
// Встановлення значення параметра 'name' та 'age'
    function setQuery2() {
        setQuery({name: 'secondName', age: '20'});
    }

    // Заміна значення параметра 'name'
    function setQuery3() {
        setQuery(prev => {
            query.set('name', 'thirdName'); // Заміна значення параметра 'query'
            return query;
        })
    }

    // Додавання нового значення до параметра 'category'
    function setQuery4() {
        setQuery(prev => {
            query.append('category', 'newCategory');
            return query;
        })
    }

    function setQuery5() {
        setQuery(prev => {
            query.append('name', 'forthName');
            return query;
        })
    }

    // повертає масив усіх значень параметра category
    function setQuery6() {
        const categories = query.getAll('name');
        console.log(categories)
        return setQueryPrint(JSON.stringify(categories))
    }

    //Отримати значення 'query
    function setQuery7() {
        const nameFromQuery = query.get('name') || ''
        console.log(nameFromQuery)
        return setQueryPrint(nameFromQuery)
    }
    const newName = query.get('name');
    const newAge = setQuery({age: '20'});


    return (
        <div>
            <h1>Компонента А</h1>
            <hr/>
            <Link to={'/b'}>До компоненти B</Link>
            <br/>
            <button onClick={setQuery1}>name</button>
            <button onClick={setQuery2}>name,age</button>
            <button onClick={setQuery3}>prev name</button>
            <button onClick={setQuery4}>append category</button>
            <button onClick={setQuery5}>append namename</button>
            <button onClick={setQuery6}>getAll name</button>
            <button onClick={setQuery7}>get</button>
            <br/>
            <p>{queryPrint}</p>
            <p>{queryPrintMany}</p>
        </div>
    );
};

export {A};