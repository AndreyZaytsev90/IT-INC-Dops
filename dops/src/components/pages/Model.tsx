import React from 'react';
import {adidasArr} from "./Adidas";
import {useParams} from "react-router-dom";
import {pumaArr} from "./Puma";
import {Error404} from "./Error404";

type Sneakers = {
    id: string
    model: string;
    collection: string;
    price: string;
    picture: string;
}
type ModelType = {
    sneakers: Sneakers[]
}

const Model = ({sneakers}: ModelType) => {
    /* console.log(adidasArr.map(i => i.id))*/

    const params = useParams()
   /* console.log(typeof params.id)
    console.log(typeof adidasArr[0].id)*/

    //console.log(adidasArr)

    const currentModel =
       /* adidasArr.filter((i) => i.id == params.id) ||*/
        sneakers.filter((i) => i.id == params.id)

    console.log(currentModel)


    return (
        <div style={{display: "flex", justifyContent: "space-between", marginLeft: "15px"}}>
            {currentModel.length === 0 ? (
               /* <Error404 />*/
                <h3>Такой модели не существует</h3>
            ) : (
                currentModel.map((i) => (
                    <div key={i.id}>
                        <div>{i.model}</div>
                        <div>{i.collection}</div>
                        <div>{i.price}</div>
                        <img src={i.picture} alt={i.model} width={700} height={700}/>
                    </div>
                ))
            )}
        </div>
    );
};

export default Model;