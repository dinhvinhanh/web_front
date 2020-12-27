import Client from './request';

const folderURL = 'folders'

const getRootFolder = () => {
    return Client.get(folderURL + '/list')
}

const getDetailedFolder = (id) => {
    return Client.get(folderURL + `/${id}/detail`)
}

const createNewFolder = (title) => {
    return Client.post(folderURL + '/create', {
        title: title,
        parent_id: 0
    })
}

const updateFolder = (folderID, title, parentID) => {
    return Client.post(folderURL + `/${folderID}/update`, {
        title: title,
        parent_id: parentID
    })
}

const shareFolder = (folderID, userIDs) => {
    return Client.post(folderURL + `/sharing`, {
        folder_id: folderID,
        user_id: userIDs
    })
}

const trashFolder = (folderID) => {
    return Client.post(folderURL + `/${folderID}/trash`)
}

export default {
    getRootFolder,
    createNewFolder,
    getDetailedFolder,
    updateFolder,
    shareFolder,
    trashFolder
}
