import IUser from './User';

export default interface IAuthenticatedUser extends IUser {
    _id: string,
    token: string,
    tokenExpiryTime: string
}