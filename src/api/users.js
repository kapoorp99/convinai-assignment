import instance from "./config";

export const fetchAllUsers = async () => {
    try {
        const res = await instance.get('/users')
        return res.data
    }
    catch (err) {
        return err
    }
}

export const fetchUserById = async (userid) => {
    try {
        const res = await instance.get(`/users/${userid}`)
        return res.data
    }
    catch (err) {
        return err
    }
}