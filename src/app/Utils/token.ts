export const getToken = () => {
    if (typeof window !== 'undefined') {
        const authStore = localStorage.getItem('authentication')
        const parsedStore = JSON.parse(authStore)
        const token = parsedStore.token
        return token
    }

    return undefined
}

export const getAuthHeader = () => {
    return {
        'Authorization': 'Bearer ' + getToken()
    }
}
