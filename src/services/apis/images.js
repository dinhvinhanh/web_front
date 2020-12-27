import Client from './request';

const imagesURL = 'images'

const uploadImages = (files) => {
    const fd = new FormData();
    for(let i=0; i<files.length; i++) {
        fd.append('images', files[i])
    }
    fd.append('folder_id', 0)
    return Client.post(imagesURL + '/upload', fd, {
        headers: {'Content-Type': 'multipart/form-data' }
    })
}

const getImageDetail = (imageID) => {
    return Client.get(imagesURL + `/${imageID}/detail`)
}

const getImagesList = () => {
    return Client.get(imagesURL + '/list')
}

const starImagesMultiple = (imageIDs) => {
    return Client.post(imagesURL + '/like', {
        select_all: false,
        image_id: imageIDs,
        folder_id: 0
    })
}

const trashImagesMultiple = (imageIDs) => {
    return Client.post(imagesURL + '/trash', {
        ids: imageIDs
    })
}

const addImagesToAlbums = (imageIDs, albumIDs) => {
    return Client.post(imagesURL + '/add-to-albums', {
        select_all: false,
        albums_id: albumIDs,
        images_id: imageIDs
    })
}

const shareImagesToUsers = (imageIDs, userIDs) => {
    return Client.post('sharing/' + imagesURL + '/sharing', {
        select_all: false,
        folder_id: 0,
        image_id: imageIDs,
        user_id: userIDs
    })
}

const addTagsToImages = (imageIDs, tagIDs) => {
    return Client.post(imagesURL + '/tag', {
        select_all: false,
        image_id: imageIDs,
        tag_id: tagIDs
    })
}

const getAllSharedImages = () => {
    return Client.get("sharing" + "/images/shared")
}

const getAllTrashedImages = () => {
    return Client.get(imagesURL + "/list/trashed")
}

const deleteImageForever = (imageIDs) => {
    return Client.post(imagesURL + "/delete", {
        ids: imageIDs
    })
}

const addToMyCollections = (imagesIDs) => {
    return Client.post("sharing" + "/images/shared/clone", {
        folder_id: 0,
        select_all: false,
        image_id: imagesIDs
    })
}

const restoreTrashedImages = (imagesIDs) => {
    return Client.post(imagesURL + "/restore", {
        ids: imagesIDs
    })
}

const downloadImage = (imageID) => {
    window.open(`http://127.0.0.1:8080/images/${imageID}/download`, "_blank")
}

export default {
    uploadImages,
    getImageDetail,
    getImagesList,
    starImagesMultiple,
    trashImagesMultiple,
    addImagesToAlbums,
    shareImagesToUsers,
    addTagsToImages,
    getAllSharedImages,
    getAllTrashedImages,
    deleteImageForever,
    addToMyCollections,
    restoreTrashedImages,
    downloadImage
}