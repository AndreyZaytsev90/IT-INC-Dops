import React from 'react';
import adidasModel1 from './../../assets/AdiFOM_TRXN_Shoes_Black_IG7453_01_standard.webp'
import adidasModel2 from './../../assets/Superstar_XLG_Shoes_Black_IG9777_01_standard.webp'
import adidasModel3
    from './../../assets/PostMove_Mid_Cloudfoam_Super_Lifestyle_Basketball_Mid_Classic_Shoes_Black_GY7163_01_standard.webp'
import {NavLink} from "react-router-dom";
import {v4} from 'uuid';

export type AdidasItem = {
    id: string
    model: string;
    collection: string;
    price: string;
    picture: string;
}
export const adidasArr: AdidasItem[] = [
    {
        id: v4(),
        model: 'ADIDAS ADIFOM TRXN',
        collection: 'new collection1',
        price: '100200$',
        picture: adidasModel1
    },
    {
        id: v4(),
        model: 'ADIDAS ADIFOM SUPER',
        collection: 'new collection22',
        price: '200300$',
        picture: adidasModel2
    },
    {
        id: v4(),
        model: 'ADIDAS SUPER SUPERSKI',
        collection: 'new collection333',
        price: '300400$',
        picture: adidasModel3
    }
]

export const Adidas = () => {
    return (
        <div>
            <h2 style={{display: "flex", justifyContent: "space-between", marginLeft: "15px"}}>ADIDAS</h2>
            <div style={{display: "flex", justifyContent: "space-between", marginLeft: "15px"}}>
                {adidasArr.map((item, i) => {
                    return (
                        <div key={item.id}>
                            <div>Price: {item.price}</div>
                            <div>{item.collection}</div>
                            <div>{item.model}</div>
                            <NavLink to={`/adidas/${item.id}`}>
                                <img src={item.picture} alt="picture" width={200} height={200}/>
                            </NavLink>
                        </div>
                    )
                })}
            </div>
            <p style={{display: "flex", justifyContent: "space-between", marginLeft: "15px"}}>
                The Dassler brothers start producing sports shoes. Adolf Dassler (Adi) registers the Adidas company. The
                German football team, dressed in Adidas, wins the World Cup. The company expands its range to include
                clothing and accessories. Adidas becomes a global leader in the sports industry. Introduces innovative
                technologies. Acquires the Salomon company to expand into the winter sports market. Conducts a
                rebranding and develops online sales. Focuses on fashionable and ultra-modern designs. Invests in
                digital technologies and sustainable production.

                Today, Adidas is one of the largest global brands in sports clothing and footwear, known for its
                innovative technology, fashionable design solutions, and strong brand culture.
            </p>

        </div>
    );
};

