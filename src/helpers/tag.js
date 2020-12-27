const formatTagRes = (res) => {
    if (res === undefined) {
        return []
    }
    return res.map(r => {
        return {
            id: r.id,
            name: r.name
        }
    })
}

export default {
    formatTagRes
}