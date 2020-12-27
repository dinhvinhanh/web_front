// {
//     id: 5,
//         title: "Album 5",
//     createdAt: "2012-01-13",
//     totalImages: 50,
//     thumbnailUrl: "https://c2.staticflickr.com/9/8239/28897202241_1497bec71a_n.jpg"
// }

const formatAlbumListRes = (res) => {
    return res.albums.map(r => {
        return {
            id: r.info.id,
            title: r.info.title,
            createdAt: r.info.created_at,
            totalImages: r.info.total_images,
            thumbnailUrl: r.thumbnail
        }
    })
}

const formatDetailedAlbumRes = (res) => {
    return {
        id: res.album.id,
        title: res.album.title,
        createdAt: res.album.created_at,
        totalImages: res.album.total_images
    }
}

export default {
    formatAlbumListRes,
    formatDetailedAlbumRes
}