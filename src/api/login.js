import axios from "axios"

export default async function login(username, password) {
    let result = {}
    try {
        const { data } = await axios({ url: `http://18.139.50.74:8080/login`, method: 'POST', data: { username, password } })
        if (result?.data?.status > 200) {
            throw new Error(result?.data?.message)
        }
        result = data
    } catch (error) {
        result.error = error
    }

    return result
}
