import Client from "./request";

const userURL = 'users'

const searchUser = (search) => {
    return Client.post(userURL + `/list?search=${search}`)
}

export default {
    searchUser
}