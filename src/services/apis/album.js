import Client from "./request";

const albumURL = "albums"

const getAlbumsList = () => {
    return Client.get(albumURL + '/list')
}

const createNewAlbum = (title) => {
    return Client.post(albumURL + '/create', {
        title: title
    })
}

const renameAlbum = (albumID, title) => {
    return Client.post(albumURL + `/${albumID}/rename`, {
        title: title
    })
}

const deleteAlbum = (albumID) => {
    return Client.post(albumURL + `/${albumID}/delete`)
}

const getDetailedAlbum = (albumID) => {
    return Client.get(albumURL + `/${albumID}/detail`)
}

export default {
    getAlbumsList,
    createNewAlbum,
    renameAlbum,
    deleteAlbum,
    getDetailedAlbum
}