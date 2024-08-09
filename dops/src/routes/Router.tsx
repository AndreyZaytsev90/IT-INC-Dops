import {createBrowserRouter} from "react-router-dom";
import {Error404} from "../components/pages/Error404";
import {dataState} from "../data/dataState";
import App from "../App";
import {Page} from "../components/pages/Page";
import {Site} from "../components/Site";
import {ProtectedPage} from "../components/pages/ProtectedPage";
import {ProtectedRoute} from "./ProtectedRoute";

export const router = createBrowserRouter([
    {
        path:"/",
        element: <App/>,
        errorElement: <Error404/>,
        children: [ // <Outlet/>
            {
                path: "/page/:id",
                element: (
                    <Page pages={dataState.pages}/>
                ),
            },
            {
                path: "/page/protected",
                element: (
                    <ProtectedRoute>
                        <ProtectedPage/>
                    </ProtectedRoute>
                ),
            },
        ],
    }
])