import React from 'react'
import { useCookies } from 'react-cookie'
import { BrowserRouter, Route } from 'react-router-dom'
import DetailChecklist from './detailChecklist';
import Home from './home';
import Login from './login';
import Register from './register';

export default function Authentication() {
    const [cookies,] = useCookies(['token'])
    return (
        <BrowserRouter>
            {!cookies || !cookies.token || cookies.token == "" ? (
                <>
                    <Route path="/" component={Login} exact />
                    <Route path="/register" component={Register} />
                </>
            ) : (
                <>
                    <Route path="/" component={Home} exact />
                    <Route path="/:id" component={DetailChecklist} />
                </>
            )}
        </BrowserRouter>
    )
}
