import { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";


const useServices = (asc, search) => {
    const [services, setServices] = useState([]);
    const axiosSecure = useAxiosSecure();

    useEffect(() => {
        // fetch('http://localhost:5000/services')
        //     .then(res => res.json())
        //     .then(data => setServices(data))

        axiosSecure(`/services?sort=${asc ? 'asc' : 'desc'}&search=${search}`)
        .then(res => setServices(res.data))
        
    }, [asc, axiosSecure, search])

    return services;
};

export default useServices;