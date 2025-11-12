import axios from "axios";
import { use, useEffect } from "react";
import Authcontext from "../context/Authcontext";
import { useNavigate } from "react-router";

const axiosInstance = axios.create({
    baseURL:'https://artlane-server.vercel.app'
});
const useAxiosSecure = ()=>{
    const navigate = useNavigate();
    const {user,logOut} = use(Authcontext);
    // request 
   useEffect(()=>{
    // request  interceptor
    const requestInterceptor=  axiosInstance.interceptors.request.use((config)=>{
        // console.log(config);
        config.headers.authorization = `Bearer ${user.accessToken}`;
        return config
    });
    // response interceptor
    const responseInterceptor = axiosInstance.interceptors.response.use((res)=>{return res} , (error)=>{
        const status = error.status;
        if(status === 401 || status === 403){
            logOut()
            .then(()=>{
                 navigate('/login');
            })
           
        }
    })

    return ()=>{
        axiosInstance.interceptors.request.eject(requestInterceptor);
        axiosInstance.interceptors.response.eject(responseInterceptor);
    }

   },[user,navigate,logOut])

    return axiosInstance;
}
export default useAxiosSecure;