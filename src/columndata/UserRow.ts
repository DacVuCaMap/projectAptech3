
import User from "../model/User";
import UserService from "../services/UserService";

const createUserRow = async () => {
    try {
        const userService = new UserService('http://103.163.215.105:8199');
        
        const users = await userService.getAllUser();
        const userList: any[] = users.Data;

        console.log('userlist : ',userList);

        let count = 0;
        
        const UserRow: any[] = userList.map((user: User) => {
            count++;
            return {
                userId: user.UserID,
                id: count,
                img: user.Avatar,
                fullname: user.FullName,
                gender: user.Sex,
                email: user.Email,
                phone: user.PhoneNumber,
                address: user.Address,
                birthday: user.Birthday,
                createdAt: user.CreateDate
            };
        });

        return UserRow;
    } catch (error) {
        console.error('Error:', error);
        return [];
    }
};
const UserRow = await createUserRow();
export default UserRow;