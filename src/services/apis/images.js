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

export default {
    uploadImages,
    getImageDetail,
    getImagesList
}