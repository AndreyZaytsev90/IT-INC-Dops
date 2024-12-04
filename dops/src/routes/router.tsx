import {createBrowserRouter, Link} from "react-router-dom";
import {findAllByDisplayValue} from "@testing-library/react";
import App from "../App";
import {Error404} from "../components/pages/Error404";
import {Adidas, adidasArr} from "../components/pages/Adidas";
import {Puma, pumaArr} from "../components/pages/Puma";
import {Abibas} from "../components/pages/Abibas";
import {Prices} from "../components/pages/Prices";
import Model from "../components/pages/Model";

export const PATH = {
    ADIDAS: '/adidas',
    PUMA: '/puma',
    ABIBAS: '/abibas',
    ID: ':id',
    PRICES: '/prices'
} as const;


export const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        errorElement: <Error404/>,
        children: [
            {
                path: PATH.ADIDAS,
                element: <Adidas/>,
            },
            {
                path: PATH.PUMA,
                element: <Puma/>,
            },
            {
                path: PATH.ABIBAS,
                element: <Abibas/>
            },
            {
                path: PATH.PRICES,
                element: <Prices/>
            },
            {
                path: `/${PATH.ADIDAS}/${PATH.ID}`,
                element: <Model sneakers={adidasArr}/>
            },
            {
                path: `/${PATH.PUMA}/${PATH.ID}`,
                element: <Model sneakers={pumaArr}/>
            }
        ]
    }
])