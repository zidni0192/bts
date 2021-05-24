import React, { useState } from 'react'
import { Button, FormControl, Input, InputLabel } from '@material-ui/core'
import { useCookies } from 'react-cookie'
import login from '../api/login'
import Swal from 'sweetalert2'

export default function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState("")
    const [cookies, setCookies, removeCookies] = useCookies(['token'])
    const onClickButton = async () => {
        const result = await login(username, password);
        setCookies('token', result.data.token)
        Swal.fire({ title: "Sukses", text: result.message })
        setTimeout(() => {
            window.location.href = "/"
        }, 400)
    }
    return (
        <div style={{ display: 'flex', alignItems: "center", flexDirection: 'column' }}>
            <div style={{ display: 'flex', width: 400, flexDirection: 'column' }}>
                <h1>Login</h1>
                <FormControl>
                    <InputLabel htmlFor="my-input">Username</InputLabel>
                    <Input id="my-input" aria-describedby="my-helper-text" onChange={(evt) => setUsername(evt.target.value)} />
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="my-input">Password</InputLabel>
                    <Input id="my-input" aria-describedby="my-helper-text" onChange={(evt) => setPassword(evt.target.value)} />
                </FormControl>
                <br />
                <Button variant="contained" color="primary" onClick={onClickButton}>
                    Login
                </Button>
            </div>
        </div>
    )
}
