import devConfig from './develop.json';

interface Config {
    general: {
      baseURL: string;
      apiKey: string;
    };
}

export function getCongif(): Config { 
    return {
        general: {
            baseURL: devConfig.baseURL,
            apiKey: devConfig.apiKey
        }
    }
}