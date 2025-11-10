import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import ArtDetails from "../pages/ArtDetails";
import Favorite from "../pages/Favorite";
import ExploreArtworks from "../pages/ExploreArtworks";
import AddArtwork from "../pages/AddArtwork";
import MyGallery from "../pages/MyGallery";

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
                element:<ExploreArtworks/>
            },
            {
                path:'/add-artwork',
                element:<AddArtwork/>
            },
            {
                path:'/my-gallery',
                element:<MyGallery/>
            },
            {
                path:'/my-favorites',
                element:<Favorite/>
            },
            {
                path:'/art-details/:id',
                element:<ArtDetails/>
            },
        ]     
    }
])




