import Client from "./request";

const tagURL = "tags"

const createNewTag = (name) => {
    return Client.post(tagURL + '/create', {
        name: name
    })
}

const searchTag = (search) => {
    return Client.get(tagURL + `/list?search=${search}`)
}

const addTags = (imageIDs, tagIDs) => {
    //todo
    return Client.post()
}

export default {
    createNewTag,
    searchTag,
    addTags
};