import React from 'react';
import {v4} from "uuid";
import pumaModel1 from "../../assets/Puma X-Ray Speed Mid WTR 385869 02.jpg";
import pumaModel2 from "../../assets/PUMA RS-100 Ader Error.jpg";
import pumaModel3 from "../../assets/PUMA Suede Diamond.jpg";
import {NavLink} from "react-router-dom";


export type PumaItem = {
    id: string
    model: string;
    collection: string;
    price: string;
    picture: string;
}
export const pumaArr: PumaItem[] = [
    {
        id: v4(),
        model: 'Puma X-Ray Speed Mid WTR',
        collection: 'demiseason',
        price: '100200$',
        picture: pumaModel1
    },
    {
        id: v4(),
        model: 'PUMA RS-100 Ader Error',
        collection: 'winter',
        price: '200300$',
        picture: pumaModel2
    },
    {
        id: v4(),
        model: 'PUMA Suede Diamond',
        collection: 'summer',
        price: '300400$',
        picture: pumaModel3
    }
]
export const Puma = () => {
    return (
        <div>
            <h2 style={{display: "flex", justifyContent: "space-between", marginLeft: "15px"}}>PUMA</h2>
            <div style={{display: "flex", justifyContent: "space-between", marginLeft: "15px"}}>
                {pumaArr.map((item, i) => {
                    return (
                        <div key={item.id}>
                            <div>Price: {item.price}</div>
                            <div>{item.collection}</div>
                            <div>{item.model}</div>
                            <NavLink to={`/puma/${item.id}`}>
                                <img src={item.picture} alt="picture" width={200} height={200}/>
                            </NavLink>
                        </div>
                    )
                })}
            </div>
            <p style={{display: "flex", justifyContent: "space-between", marginLeft: "15px"}}>
                Karl and Rudolf Dassler, the founding brothers of Adidas, start producing sports shoes. After a
                disagreement, Rudolf founds the Puma company. Puma becomes famous through collaborations with legendary
                athletes. The company expands its range to include clothing and accessories. Puma enters the ranks of
                leading sports industry brands. Introduces innovative technologies and materials. Conducts a rebranding
                and collaborates with fashion designers. Focuses on fashionable and ultra-modern designs. Invests in
                sustainable production and social responsibility.

                Today, Puma is one of the largest global brands in sports clothing and footwear, known for its
                innovative technology, fashionable design solutions, and strong brand culture.
            </p>
        </div>
    );
};

