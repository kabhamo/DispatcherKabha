import axios from 'axios';
import { useEffect, useState } from "react";
import { getConfig } from "../../config/config";
import { Article } from "../util/types";

axios.defaults.baseURL = getConfig().general.baseURL;

//axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token')

type AxiosProps = {
    url: string,
    method: 'get' | 'post' | 'put' | 'delete',
    body?: string,
    headers?: string
}
const useAxios = ({ url, method, body, headers } : AxiosProps) => { 
    const [response, setResponse] = useState<Article[] | null>(null);
    const [error, setError] = useState('');
    const [loading, setloading] = useState(true);

    const fetchAxios = async () => { 
        try {
            //? should be more dynamic
            //? Add AxiosResponse 
            const response: Article[] = (await axios[method](url)).data['articles'];
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