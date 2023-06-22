import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOuts/Main";
import Login from "../Components/Login/Login";
import Signup from "../Components/Signup/Signup";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/signup",
                element: <Signup></Signup>
            }
        ]
    }
])

export default router;