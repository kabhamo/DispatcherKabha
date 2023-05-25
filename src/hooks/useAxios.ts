import React, { useState, useEffect } from "react";
import axios, { AxiosResponse } from 'axios'
import { ArticleResponse } from "../util/types";
import { getConfig } from "../../config/config";

axios.defaults.baseURL = getConfig().general.baseURL;

//axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token')

type AxiosProps = {
    url: string,
    method: 'get' | 'post' | 'put' | 'delete',
    body?: string,
    headers?: string
}
const useAxios = ({ url, method, body, headers } : AxiosProps) => { 
    const [response, setResponse] = useState<ArticleResponse[] | null>(null);
    const [error, setError] = useState('');
    const [loading, setloading] = useState(true);

    const fetchAxios = async () => { 
        try {
            //? should be more dynamic
            //? Add AxiosResponse 
            const response: ArticleResponse[] = (await axios[method](url)).data['articles'];
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