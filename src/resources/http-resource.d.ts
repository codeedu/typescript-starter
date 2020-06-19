import { AxiosInstance, AxiosResponse } from "axios";

declare class HttpResource{

    constructor(http: AxiosInstance, resource: string);

    list<T = any>(): Promise<AxiosResponse<T>>;
}

export = HttpResource;