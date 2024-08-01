import {DataType, PagesType} from "../../data/data";
import React from "react";
import {Navigate, useLocation, useParams} from "react-router-dom";
import {Error404} from "./Error404";

type PagesProps = {
    pages: PagesType[]
}

export const Page: React.FC<PagesProps> = ({pages}: DataType) => {

    const params = useParams() //хватает индекс массива. Если path={'/page/:id'}, то после выбора страницы будет объект {id : 'index'}

    const locale = useLocation() // Позволяет увидеть все свойства из адресной строки. Ключевое свойство pathname

    console.log(locale) // {pathname: '/page/2', search: '', hash: '', state: null, key: '3i5tpv0r'}

    console.log(params)

    return (
        <>
            {locale.pathname === '/page/0' && <div>Secret</div>}

            {pages[Number(params.id1)] ? (
                <div>
                    <h2>{pages[Number(params.id1)].heading}</h2>
                    <div>
                        {pages[Number(params.id1)].about}
                    </div>
                </div>
            ) : (
                //<Error404 />
                <Navigate to={'/page/error'}/>
            )}
        </>
    );
};