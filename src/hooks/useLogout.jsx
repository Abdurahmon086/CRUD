

export const Logout = (navigator) => {
    localStorage.clear()

    return navigator('/login')
}