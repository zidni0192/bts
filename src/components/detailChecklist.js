import React, { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie';
import getChecklistItemById from '../api/getChecklistItemById';

export default function DetailChecklist({ match }) {
    const [item, setItem] = useState([])
    const [cookies] = useCookies(['token']);
    const fetchCheckListById = async () => {
        const result = await getChecklistItemById(cookies.token, match?.params.id)
        if (result.data) {
            setItem(result.data)
        }
    }

    useEffect(() => {
        fetchCheckListById()
    }, [])

    return (
        <div>
            {item.name}
        </div>
    )
}
