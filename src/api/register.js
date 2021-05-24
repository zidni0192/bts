import axios from "axios"

export default async function register(email, username, password) {
    let result = {}
    try {
        const { data } = await axios({ url: `http://18.139.50.74:8080/register`, method: 'POST', data: { username, password, email } })
        if (result?.data?.status > 200) {
            throw new Error(result?.data?.message)
        }
        result = data
    } catch (error) {
        result.error = error
    }

    return result
}
