const formatImagesList = (res) => {
    return res.map(r => {
        return {
            src: r.image,
            thumbnail: `http://localhost:8080${r.thumbnail_url}`,
            caption: r.title
        }
    })
}

const formatImageIDs = (res) => {
    return res.map(r => {
        return r.id
    })
}

export default {
    formatImagesList,
    formatImageIDs
}

// {
//     src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
//         thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
//     thumbnailWidth: 320,
//     thumbnailHeight: 212,
//     caption: "Boats (Jeshu John - designerspics.com)"
// },
// {
//     src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
//         thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
//     thumbnailWidth: 320,
//     thumbnailHeight: 212,
//     caption: "Color Pencils (Jeshu John - designerspics.com)"
// },
// {
//     src: "https://c7.staticflickr.com/9/8546/28354329294_bb45ba31fa_b.jpg",
//         thumbnail: "https://c7.staticflickr.com/9/8546/28354329294_bb45ba31fa_n.jpg",
//     thumbnailWidth: 320,
//     thumbnailHeight: 213,
//     caption: "Red Apples with other Red Fruit (foodiesfeed.com)"
// },
// {
//     src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
//         thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
//     thumbnailWidth: 320,
//     thumbnailHeight: 174,
//     tags: [{value: "Nature", title: "Nature"}, {value: "Flora", title: "Flora"}],
//     caption: "After Rain (Jeshu John - designerspics.com)"
// },