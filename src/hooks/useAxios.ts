import React, { useState, useEffect } from "react";
import axios, { AxiosResponse } from 'axios'
import { Response } from "../util/response";
import { getCongif } from "../../config/config";

axios.defaults.baseURL = getCongif().general.baseURL;

//axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token')

type AxiosProps = {
    url: string,
    method: 'get' | 'post' | 'put' | 'delete',
    body?: string,
    headers?: string
}
const useAxios = ({ url, method, body, headers } : AxiosProps) => { 
    const [response, setResponse] = useState<Response[] | null>(null);
    const [error, setError] = useState('');
    const [loading, setloading] = useState(true);

    const fetchAxios = async () => { 
        try {
            //? should be more dynamic
            //? Add AxiosResponse 
            const response: Response[] = (await axios[method](url)).data['articles'];
            if (response) { 
                setResponse(response)
            }
        } catch (ex) {
            console.log("Error from hook: ",ex)
            setError(String(ex))
        } finally { 
            setloading(false);
        }
    }

    useEffect(() => { 
        fetchAxios()
    },[])

    return {response, error, loading}
}

export default useAxios;