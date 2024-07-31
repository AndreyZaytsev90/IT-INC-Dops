import {DataType, PagesType} from "../../data/data";
import React from "react";
import {useParams} from "react-router-dom";

type PagesProps = {
    pages: PagesType[]
}

export const Page: React.FC<PagesProps> = ({pages}: DataType) => {

    const params = useParams()
    console.log(params)

    return (
        <div>
            {pages[params].about}
        </div>
    );
};