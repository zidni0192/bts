import { Collapse, List, ListItem, ListItemIcon, ListItemText, ListSubheader } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie';
import { Link } from 'react-router-dom';
import getAllChecklist from '../api/getAllChecklist'

export default function Home() {
    const [checklist, setChecklist] = useState([])
    const [cookies] = useCookies(['token']);
    const fetchAllChecklist = async () => {
        const result = await getAllChecklist(cookies.token)
        if (result.data) {
            setChecklist(result.data)
        }
    }

    useEffect(() => {
        fetchAllChecklist()
    }, [])

    return (
        <div style={{ display: 'flex', alignItems: "center", flexDirection: 'column' }}>
            <div style={{ display: 'flex', width: 400, flexDirection: 'column' }}>
                <List
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                    subheader={
                        <ListSubheader component="div" id="nested-list-subheader">
                            Checklist
                        </ListSubheader>
                    }
                >
                    {checklist?.map(item => (
                        <ListItem button>
                            <ListItemText primary={item.name} />
                            <Collapse in={true} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    {item.items?.map(items => (
                                        <Link to={'/' + items.id}>
                                            <ListItem button >
                                                <ListItemText primary={items.name} />
                                            </ListItem>
                                        </Link>
                                    ))}
                                </List>
                            </Collapse>
                        </ListItem>
                    ))}
                </List>
            </div>
        </div>
    )
}
