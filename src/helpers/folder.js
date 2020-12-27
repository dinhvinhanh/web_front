const formatGetFolderListRes = (res) => {
    return res.map(r => {
        return {
            id: r.id,
            title: r.title,
            parentID: r.parent_id,
            createdAt: r.created_at,
        }
    })
}

export default {
    formatGetFolderListRes
}