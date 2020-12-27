import Client from "./request";

const userURL = 'users'

const searchUser = (search) => {
    return Client.get(userURL + `/list?search=${search}`)
}

const getMe = () => {
    return Client.get(userURL + "/me")
}

const getAllUsers = () => {
    return Client.get(userURL + "/list")
}

export default {
    searchUser,
    getMe,
    getAllUsers
}