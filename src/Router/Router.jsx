import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Home/Home/Home";
import ForJobSeekers from "../Shared/ForJobSeekers/ForJobSeekers";
import ForEmployers from "../Shared/ForEmployers/ForEmployers";
import ContactUs from "../Shared/ContactUs/ContactUs";
import Advantages from "../Shared/Advantages/Advantages";
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
            },{
                path:'forEmployers',
                element:<ForEmployers/>
            },{
                path:"advantages",
                element:<Advantages/>
            },{
                path:'contactUs',
                element:<ContactUs/>
            }
        ]
    }
])

export default router;