import axios from "axios"

export default async function getAllChecklist(token) {
    let result = {}
    try {
        const { data } = await axios({ url: `http://18.139.50.74:8080/checklist`, headers: { Authorization: `Bearer ${token}` }, method: 'GET' })
        if (result?.data?.status > 200) {
            throw new Error(result?.data?.message)
        }
        result = data
    } catch (error) {
        result.error = error
    }

    return result
}
