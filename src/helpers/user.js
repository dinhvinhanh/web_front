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

const formatDataSource = (res) => {
    console.log("anh tuan")
    return res.map((r, index) => {
        return {
            no: index,
            userName: r.user_name,
            email: r.email,
            isBlocked: r.is_blocked,
        }
    })
}

export default {
    formatUser,
    formatDataSource
}