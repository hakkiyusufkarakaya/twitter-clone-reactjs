import {createBrowserRouter} from "react-router-dom"
import Home from "../pages/home/index.jsx";
import Explore from "../pages/explore/index.jsx";
import Notifications from "../pages/notifications/index.jsx";
import MainLayout from "../layout/main/index.jsx";
import Messages from "../pages/messages/index.jsx";
import Lists from "../pages/lists/index.jsx";
import Profile from "../pages/profile/index.jsx";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: 'explore',
                element: <Explore/>
            },
            {
                path: 'notifications',
                element: <Notifications />
            },
            {
                path: 'messages',
                element: <Messages />
            },
            {
                path: 'lists',
                element: <Lists />
            },
            {
                path: 'profile',
                element: <Profile />
            },
        ]
    },

])

export default routes