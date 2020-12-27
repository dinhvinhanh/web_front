const formatUser = (res) => {
    if (res === undefined) {
        return []
    }
    return res.map(r => {
        return {
            id: r.id,
            email: r.email,
            avatarUrl: r.avatar
        }
    })
}

export default {
    formatUser
}