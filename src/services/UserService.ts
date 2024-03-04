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
    getPageData(page: string, curr: string, text: string): any {
        const userJson: any = {
            PageSize: page,
            CurrentPage: curr,
            TextSearch: text
        }
        return userJson;
    }
    //get all user
    async getAllUser(): Promise<any> {
        let jsonData = this.getPageData('50', '1', '');
        try {
            const response = await axios.post(`${this.baseUrl}/Users/GetAllUser`, jsonData
                , { headers: this.postForm(false, true) });
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
    async addNewUser(userData: User, file: File): Promise<any> {
        let userJson = {
            UserID: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
            UserName: "",
            FullName: "",
            Sex: 0,
            Email: "",
            PhoneNumber: "",
            Birthday: "",
            Avatar: "",
            ProvinceID: 0,
            WardID: 0,
            DistrictID: 0,
            Address: ""
        }
        let postUser = { ...userJson, ...userData };
        let link = await this.uploadUserImg(file);
        postUser = { ...postUser, Avatar: link }
        console.log(postUser)
        try {
            const response = await axios.post(`${this.baseUrl}/Users/CreateUser`, postUser
                , { headers: this.postForm(false, true) });
            console.log('Data sent successfully:', response.data);
            return response.data['Status'];
            //check 

            // Handle response data here if needed
        } catch (error) {
            const axiosError = error as AxiosError
            console.error('Error sending data:', axiosError.response);
            // Handle error here if needed

        }
    }
    async uploadUserImg(file: File): Promise<string> {
        const formData = new FormData();
        formData.append('file', file);
        console.log(file);
        try {
            const res = await axios.post(`${this.baseUrl}/api/File/UploadFile`, formData, {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem('token')}`,
                    "Content-Type": 'multipart/form-data'
                }
            });
            console.log('File uploaded successfully:', res.data);

            return res.data.Object;
        } catch (error) {
            let err = error as AxiosError
            console.log(err.response)
            return '';
        }
    }
    // get user
    async getUserById(userId: string): Promise<any> {
        console.log(userId);
        try {
            const response = await axios.post(
                `${this.baseUrl}/Users/GetByID`,
                userId,
                { 
                    headers: {
                        "Authorization": `Bearer ${localStorage.getItem('token')}`,
                        'Content-Type': 'application/json'
                    }
                }
            );
            return response.data.Object;
        } catch (error) {
            let err = error as AxiosError;
            console.log('get error to get user by id: ', err.response);
            throw error;
        }
    }
    //update
    async getUpdateUser(userData: any): Promise<any> {
        let userJson = {
            UserID: "",
            UserName: "",
            Password:"123456",
            FullName: "",
            Sex: 0,
            Email: "",
            PhoneNumber: "",
            Birthday: "",
            Avatar: "",
            ProvinceID: 0,
            WardID: 0,
            DistrictID: 0,
            Address: ""
        }
        let postUser = { ...userJson, ...userData };
        console.log(postUser)
        try {
            const response = await axios.post(`${this.baseUrl}/Users/UpdateUser`, postUser
                , { headers: this.postForm(false, true) });
            console.log('Data sent successfully:', response.data);
            return;
            //check 

            // Handle response data here if needed
        } catch (error) {
            const axiosError = error as AxiosError
            console.error('Error sending data:', axiosError.response);
            // Handle error here if needed

        }
    }
    //delete
    async deleteUserById(userId: string): Promise<any> {
        console.log(userId);
        try {
            const response = await axios.post(
                `${this.baseUrl}/Users/DeleteUser?UserID=${userId}`,{},
                { 
                    headers: {
                        "Authorization": `Bearer ${localStorage.getItem('token')}`,
                        'Content-Type': 'text/plain',
                        'accept': 'text/plain'
                    }
                }
            );
            console.log('delete response :',response.data);
            return ;
        } catch (error) {
            let err = error as AxiosError;
            console.log('get error to get user by id: ', err.response);
            throw error;
        }
    }

}
export default UserService;
