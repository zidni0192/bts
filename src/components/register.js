import React, { useState } from 'react'
import { Button, FormControl, Input, InputLabel } from '@material-ui/core'
import { useCookies } from 'react-cookie'
import register from '../api/register'
import Swal from 'sweetalert2'

export default function Register() {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState("")
    const [cookies, setCookies, removeCookies] = useCookies(['token'])
    const onClickButton = async () => {
        const result = await register(email, username, password);
        Swal.fire({ title: "Sukses", text: result.message })
        setTimeout(() => {
            window.location.href = "/"

        }, 400)
    }
    return (
        <div style={{ display: 'flex', alignItems: "center", flexDirection: 'column' }}>
            <div style={{ display: 'flex', width: 400, flexDirection: 'column' }}>
                <h1>Register</h1>
                <FormControl>
                    <InputLabel htmlFor="my-input">Email</InputLabel>
                    <Input id="my-input" aria-describedby="my-helper-text" onChange={(evt) => setEmail(evt.target.value)} />
                </FormControl>
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
                    Register
                </Button>
            </div>
        </div>
    )
}
