import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import ArtDetails from "../pages/ArtDetails";

export const router = createBrowserRouter([
    {
        path:'/',
        Component:RootLayout,
        children:[
            {
                index:true,
                Component:Home
            },
            {
                path:'/register',
                Component:Register
            },
            {
                path:'/login',
                Component:Login,
            },
            {
                path:'/explore-artworks',
                element:<h1>explore artworks</h1>
            },
            {
                path:'/add-artwork',
                element:<h1>Add artworks</h1>
            },
            {
                path:'/my-gallery',
                element:<h1>my gallery</h1>
            },
            {
                path:'/my-favorites',
                element:<h1>my favorites</h1>
            },
            {
                path:'/art-details/:id',
                element:<ArtDetails/>
            },
        ]     
    }
])




