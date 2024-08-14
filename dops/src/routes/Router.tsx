import {createBrowserRouter} from "react-router-dom";
import {Error404} from "../components/pages/Error404";
import {dataState} from "../data/dataState";
import App from "../App";
import {Page} from "../components/pages/Page";
import {Site} from "../components/Site";
import {ProtectedPage} from "../components/pages/ProtectedPage";
import {ProtectedRoute} from "./ProtectedRoute";

const paths = [
    "/page/:id",
    "/page/protected",
    "/page/error"
]
export const router = createBrowserRouter([



    {
        path: "/",
        element: <App/>,
        errorElement: <Error404/>,
        children: [ // <Outlet/>
            {
                path: paths[0],
                element: (
                    <Page pages={dataState.pages}/>
                )
            },
            {
                path: paths[1],
                element: ( // ProtectedRoute - условный шлагбаум (защита)
                    <ProtectedRoute>
                        <ProtectedPage/>
                    </ProtectedRoute>
                )
            },
            {
                path: paths[2],
                element: (
                    <Error404/>
                )
            },
        ],
    }
])