import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Home/Home/Home";
import ForJobSeekers from "../Shared/ForJobSeekers/ForJobSeekers";
const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path:'forJobSeekers',
                element:<ForJobSeekers/>
            }
        ]
    }
])

export default router;