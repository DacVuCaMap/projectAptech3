import axios, { AxiosError, AxiosResponse } from "axios";
import User from "../model/User";


class UserService {
    private baseUrl: string;
    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }
    postForm(content: boolean, auth: boolean): any {
        const headers: any = {};
        if (auth) {
            headers['Authorization'] = `Bearer ${localStorage.getItem('token')}`
        }
        if (content) {
            headers['Content-Type'] = 'multipart/form-data'
        }
        return headers;
    }
    sendJson(page: string, curr: string, text: string): any {
        const userJson: any = {
            PageSize: page,
            CurrentPage: curr,
            TextSearch: text
        }
        return userJson;
    }
    //get all user
    async getAllUser(): Promise<any> {
        let jsonData = this.sendJson('50', '1', '');
        try {
            const response = await axios.post(`${this.baseUrl}/Users/GetAllUser`, jsonData, { headers: this.postForm(false, true) });
            return response.data.Object;
        } catch (error) {
            // console.error('Error getAllUser users:', error.response.data);
            if (axios.isAxiosError(error)) {
                const axiosError = error as AxiosError;
                console.error('Error getAllUser users:', axiosError.response?.data);
                
            } else {
                console.error('Error getAllUser users:', error);
            }
            throw error;
        }
    }

    //add new user  
    async addNewUser(userData: User): Promise<any> {
        try {
            console.log(userData)
            const response = await axios.post(`${this.baseUrl}/Users/CreateUser`, userData,{headers:this.postForm(true,true)});
            console.log('Data sent successfully:', response.data);

            // Handle response data here if needed
        } catch (error) {
            console.error('Error sending data:', error);
            // Handle error here if needed
        }
    }
    //
    async getUserByName(str: string): Promise<User[]> {
        let jsonData = this.sendJson('50', '1', str);
        try {
            const response: AxiosResponse<User[]> = await axios.post<User[]>(`${this.baseUrl}/Users/GetAllUser`, jsonData, this.postForm);
            return response.data;
        } catch (error) {
            console.error('Error getuserbyname users:', error);
            throw error;
        }
    }
    async getUserById(str: string): Promise<User> {
        try {
            const response: AxiosResponse<User> = await axios.post<User>(`${this.baseUrl}/Users/GetByID`, str, this.postForm);
            return response.data
        } catch (error) {
            console.error('error getUserID', error);
            throw error;
        }
    }
}
export default UserService;
